/*! English Path – PWA bootstrap
 * ---------------------------------------------------------------------------
 * Change log:
 *   2026-10-17 : Initial version.
 *                - Registers the service worker ONLY in production
 *                  (skipped on localhost/dev ports, preview iframes and
 *                   known preview hosts / insecure origins).
 *                - Shows a friendly "install as an app" popup
 *                  (native prompt on Chromium, instructions on iOS/others).
 *   2026-10-17 : Improved install popup – now appears reliably on mobile
 *                visits even when the native beforeinstallprompt is delayed.
 * ---------------------------------------------------------------------------
 */
(function () {
  'use strict';

  /* ======================================================================
   * 1) Environment detection – the service worker must never register in
   *    the dev server, inside a preview iframe, or on insecure origins.
   * ==================================================================== */
  var host = location.hostname;
  var port = location.port;

  var isLocalhost = /^(localhost|127(\.\d+){3}|0\.0\.0\.0|::1|\[::1\])$/i.test(host);
  var isDevPort = /^(3000|3001|4173|4200|5000|5173|5174|8080|8081|9000)$/.test(port);
  var isPreviewHost = /(stackblitz|codesandbox|webcontainer|gitpod|csb\.app|repl\.co|glitch\.me|localhost\.run|ngrok|preview|sandbox)/i.test(host);
  var isInIframe = (function () {
    try { return window.self !== window.top; } catch (e) { return true; }
  })();
  var isSecure = location.protocol === 'https:' || isLocalhost;
  var supportsSW = 'serviceWorker' in navigator;

  var skipSW = !supportsSW || isLocalhost || isDevPort || isPreviewHost || isInIframe || !isSecure;

  if (skipSW) {
    console.info('[PWA] Service worker not registered (dev/preview/iframe/unsupported):',
      { isLocalhost: isLocalhost, isDevPort: isDevPort, isPreviewHost: isPreviewHost, isInIframe: isInIframe, isSecure: isSecure, supportsSW: supportsSW });
  } else {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js', { scope: './' })
        .then(function (reg) { console.info('[PWA] Service worker registered:', reg.scope); })
        .catch(function (err) { console.warn('[PWA] Service worker registration failed:', err); });
    });
  }

  /* ======================================================================
   * 2) "Install as an app" popup
   * ==================================================================== */
  if (skipSW) return;

  var DISMISS_KEY = 'ep-install-dismissed-at';
  var DISMISS_DAYS = 7;
  var deferredPrompt = null;
  var popup = null;
  var shown = false;

  function isStandalone() {
    return window.matchMedia('(display-mode: standalone)').matches ||
           window.matchMedia('(display-mode: minimal-ui)').matches ||
           window.navigator.standalone === true;
  }

  function recentlyDismissed() {
    var v = parseInt(window.localStorage.getItem(DISMISS_KEY) || '0', 10);
    return v > 0 && (Date.now() - v) < DISMISS_DAYS * 86400000;
  }

  function isIOS() {
    return /iphone|ipad|ipod/i.test(navigator.userAgent) ||
           (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  }

  function isMobile() {
    return /android|iphone|ipad|ipod|iemobile|opera mini|mobile|silk|kindle/i.test(navigator.userAgent);
  }

  /* ---------- styles (injected, keeps the HTML/CSS untouched) ---------- */
  function injectStyles() {
    if (document.getElementById('pwa-install-style')) return;
    var css = [
      '#pwa-install{position:fixed;left:16px;right:16px;bottom:16px;z-index:99999;',
      'display:flex;align-items:center;gap:14px;max-width:520px;margin:0 auto;',
      'background:#fff;color:#1e293b;border:1px solid #e2e8f0;border-radius:18px;',
      'box-shadow:0 18px 40px rgba(15,23,42,.22);padding:14px 16px;',
      "font-family:'Noto Naskh Arabic','Segoe UI',system-ui,sans-serif;direction:rtl;",
      'transform:translateY(140%);opacity:0;transition:transform .45s cubic-bezier(.2,.8,.2,1),opacity .35s}',
      '#pwa-install.show{transform:translateY(0);opacity:1}',
      '#pwa-install .pwa-logo{width:52px;height:52px;flex:0 0 52px;border-radius:14px;box-shadow:0 4px 12px rgba(37,99,235,.35)}',
      '#pwa-install .pwa-copy{flex:1;min-width:0}',
      '#pwa-install .pwa-title{font-weight:700;font-size:15px;margin:0 0 2px}',
      '#pwa-install .pwa-text{font-size:12.5px;line-height:1.5;color:#64748b;margin:0}',
      '#pwa-install .pwa-actions{display:flex;flex-direction:column;gap:6px;flex:0 0 auto}',
      '#pwa-install .pwa-btn{border:0;cursor:pointer;border-radius:12px;font-family:inherit;font-weight:700;font-size:13px;padding:9px 16px;white-space:nowrap}',
      '#pwa-install .pwa-btn-install{background:linear-gradient(135deg,#2563eb,#14b8a6);color:#fff}',
      '#pwa-install .pwa-btn-install:active{transform:scale(.97)}',
      '#pwa-install .pwa-close{background:#f1f5f9;color:#475569;padding:6px 10px;font-size:12px}',
      '@media(max-width:480px){#pwa-install{left:10px;right:10px;bottom:10px;padding:12px;gap:10px}',
      '#pwa-install .pwa-logo{width:44px;height:44px;flex-basis:44px}#pwa-install .pwa-text{font-size:12px}}'
    ].join('');
    var style = document.createElement('style');
    style.id = 'pwa-install-style';
    style.textContent = css;
    document.head.appendChild(style);
  }

  /* ---------- markup ---------- */
  function buildPopup() {
    injectStyles();
    var el = document.createElement('div');
    el.id = 'pwa-install';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-live', 'polite');
    el.innerHTML =
      '<img class="pwa-logo" src="icons/icon-192.png" alt="English Path">' +
      '<div class="pwa-copy">' +
        '<p class="pwa-title">ثبّت التطبيق على هاتفك 📲</p>' +
        '<p class="pwa-text"></p>' +
      '</div>' +
      '<div class="pwa-actions">' +
        '<button type="button" class="pwa-btn pwa-btn-install">تثبيت</button>' +
        '<button type="button" class="pwa-btn pwa-close">لاحقًا</button>' +
      '</div>';
    document.body.appendChild(el);

    el.querySelector('.pwa-close').addEventListener('click', function () {
      window.localStorage.setItem(DISMISS_KEY, String(Date.now()));
      hidePopup();
    });

    el.querySelector('.pwa-btn-install').addEventListener('click', onInstallClick);

    return el;
  }

  function showPopup(text) {
    if (shown) { if (popup) popup.querySelector('.pwa-text').textContent = text; return; }
    shown = true;
    if (!popup) popup = buildPopup();
    popup.querySelector('.pwa-text').textContent = text;
    requestAnimationFrame(function () { popup.classList.add('show'); });
  }

  function hidePopup() {
    if (popup) popup.classList.remove('show');
  }

  function onInstallClick() {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(function (choice) {
        if (choice && choice.outcome === 'accepted') {
          window.localStorage.setItem(DISMISS_KEY, String(Date.now()));
          hidePopup();
        }
        deferredPrompt = null;
      });
    } else {
      showPopup(isIOS()
        ? 'اضغط زر المشاركة ⬆️ في أسفل Safari ثم اختر «إضافة إلى الشاشة الرئيسية».'
        : 'افتح قائمة المتصفح (⋮) ثم اختر «تثبيت التطبيق» أو «إضافة إلى الشاشة الرئيسية».');
    }
  }

  /* ---------- Chromium: native install prompt ---------- */
  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferredPrompt = e;
    if (!isStandalone() && !recentlyDismissed()) {
      showPopup('يمكنك تنزيل الموقع كتطبيق وتثبيته على هاتفك، ثم استخدامه حتى دون إنترنت.');
    }
  });

  window.addEventListener('appinstalled', function () {
    window.localStorage.setItem(DISMISS_KEY, String(Date.now()));
    hidePopup();
    console.info('[PWA] App installed.');
  });

  /* ---------- Fallback: mobile visits where the native prompt is delayed ---------- */
  window.addEventListener('load', function () {
    if (isStandalone() || recentlyDismissed()) return;

    if (isIOS()) {
      window.setTimeout(function () {
        if (!shown) showPopup('لإضافة التطبيق: اضغط زر المشاركة ⬆️ ثم «إضافة إلى الشاشة الرئيسية».');
      }, 3000);
    } else if (isMobile()) {
      window.setTimeout(function () {
        if (!shown && !deferredPrompt) {
          showPopup('يمكنك تثبيت الموقع كتطبيق من قائمة المتصفح ⋮ عبر «تثبيت التطبيق» أو «إضافة إلى الشاشة الرئيسية».');
        }
      }, 4500);
    }
  });
})();
