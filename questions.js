/* ============================================================
   English Path – Questions Page
   Question bank covering the four skills, vocabulary & grammar
   ============================================================ */

const QUIZ_DATA = {
  reading: {
    name: 'القراءة',
    icon: 'fa-book-open',
    color: '#2563eb',
    bg: '#dbeafe',
    desc: 'فهم النصوص والمضامين والاستنتاج',
    questions: [
      {
        q: 'اقرأ الجملة: "Sara wakes up early every morning and reads the newspaper before breakfast." ما الذي تفعله سارة قبل الإفطار؟',
        options: ['تنام', 'تقرأ الصحيفة', 'تذهب للعمل', 'تتصل بصديقتها'],
        answer: 1
      },
      {
        q: 'ما معنى كلمة "ancient" في جملة: "The museum displays ancient coins from the Roman era"؟',
        options: ['حديثة', 'قديمة جدًا', 'صلبة', 'لامعة'],
        answer: 1
      },
      {
        q: 'فقرة: "The weather was terrible, so we decided to stay indoors." ما الذي قررنا فعله بسبب سوء الطقس؟',
        options: ['الخروج للنزهة', 'البقاء في الداخل', 'السفر بالسيارة', 'الذهاب للتسوق'],
        answer: 1
      },
      {
        q: 'ما الفكرة الرئيسية (main idea) في نص يتحدث عن فوائد القراءة اليومية؟',
        options: ['القراءة مضيعة للوقت', 'القراءة اليومية مفيدة للعقل واللغة', 'التلفاز أفضل من الكتب', 'الكتب غالية الثمن'],
        answer: 1
      },
      {
        q: 'كلمة "however" في النص تدل على:',
        options: ['إضافة معلومة', 'تعارض أو استدراك', 'سبب ونتيجة', 'ترتيب زمني'],
        answer: 1
      }
    ]
  },
  writing: {
    name: 'الكتابة',
    icon: 'fa-pen',
    color: '#f97316',
    bg: '#ffedd5',
    desc: 'تكوين الجمل وترتيب الفكرة',
    questions: [
      {
        q: 'أي جملة مكتوبة بشكل صحيح؟',
        options: [
          'She go to school every day.',
          'She goes to school every day.',
          'She going to school every day.',
          'She gone to school every day.'
        ],
        answer: 1
      },
      {
        q: 'ما هي الجملة الصحيحة في زمن المضارع التام (Present Perfect)؟',
        options: [
          'I have finish my homework.',
          'I have finished my homework.',
          'I has finished my homework.',
          'I am finished my homework.'
        ],
        answer: 1
      },
      {
        q: 'أي كلمة ربط (linking word) مناسبة للسبب؟ "It was raining, ___ we took an umbrella."',
        options: ['because', 'but', 'so', 'although'],
        answer: 2
      },
      {
        q: 'ما الصياغة الصحيحة للسؤال في الماضي؟',
        options: [
          'Where you did go yesterday?',
          'Where did you go yesterday?',
          'Where you went yesterday?',
          'Where do you went yesterday?'
        ],
        answer: 1
      },
      {
        q: 'عند كتابة رسالة رسمية (formal letter)، من الأنسب أن تبدأ بـ:',
        options: ['Hey', 'Hi there', 'Dear Sir/Madam', 'Yo'],
        answer: 2
      }
    ]
  },
  listening: {
    name: 'الاستماع',
    icon: 'fa-headphones',
    color: '#14b8a6',
    bg: '#ccfbf1',
    desc: 'فهم المحادثات والأصوات',
    questions: [
      {
        q: 'عند سماع المتحدث يقول: "Could you speak a bit slower, please?" فالمتحدث يطلب:',
        options: ['التحدث بصوت أعلى', 'التحدث بشكل أبطأ', 'إيقاف الحديث', 'تكرار الكلام'],
        answer: 1
      },
      {
        q: 'في محادثة بمطار، سمعت: "Your flight is delayed." ماذا يعني ذلك؟',
        options: ['رحلتك ألغيت', 'رحلتك تأخرت', 'رحلتك وصلت', 'رحلتك مجانية'],
        answer: 1
      },
      {
        q: 'سمعت: "I\'d rather stay home tonight." المتحدث يفضّل:',
        options: ['الخروج الليلة', 'البقاء في المنزل', 'السفر', 'زيارة الأصدقاء'],
        answer: 1
      },
      {
        q: 'النبرة (intonation) الصاعدة في نهاية الجملة غالبًا تدل على:',
        options: ['جملة خبرية', 'سؤال يتطلب إجابة بنعم/لا', 'أمر', 'تعجب فقط'],
        answer: 1
      },
      {
        q: 'سمعت: "Take two tablets after meals." النصيحة هي تناول الدواء:',
        options: ['قبل الأكل', 'بعد الأكل', 'على معدة فارغة', 'قبل النوم فقط'],
        answer: 1
      }
    ]
  },
  speaking: {
    name: 'التحدث',
    icon: 'fa-microphone',
    color: '#8b5cf6',
    bg: '#ede9fe',
    desc: 'النطق والتعبير والمحادثة',
    questions: [
      {
        q: 'ما التعبير الأنسب عند مقابلة شخص لأول مرة؟',
        options: ['Goodbye forever', 'Nice to meet you', 'See you later', 'What do you want?'],
        answer: 1
      },
      {
        q: 'كيف تطلب المساعدة بأدب؟',
        options: [
          'Give me that.',
          'Could you help me, please?',
          'Do it now.',
          'You must help.'
        ],
        answer: 1
      },
      {
        q: 'عند إعطاء رأيك الشخصي، تقول عادة:',
        options: ['In my opinion...', 'Once upon a time...', 'First of all...', 'To sum up...'],
        answer: 0
      },
      {
        q: 'الرد المناسب على "Thank you very much" هو:',
        options: ['No', 'You\'re welcome', 'Yes', 'Sorry'],
        answer: 1
      },
      {
        q: 'كيف تسأل عن الطريق إلى محطة القطار؟',
        options: [
          'Where is the train station?',
          'Give me the station.',
          'The station now.',
          'I am station.'
        ],
        answer: 0
      }
    ]
  },
  vocabulary: {
    name: 'المفردات',
    icon: 'fa-spell-check',
    color: '#e11d48',
    bg: '#ffe4e6',
    desc: 'معاني الكلمات ومفردات الحياة اليومية',
    questions: [
      {
        q: 'ما معنى كلمة "improve"؟',
        options: ['يحسّن', 'يبيع', 'ينسى', 'يجري'],
        answer: 0
      },
      {
        q: 'ما معنى كلمة "brave"؟',
        options: ['جبان', 'شجاع', 'بطيء', 'غاضب'],
        answer: 1
      },
      {
        q: 'اختر المرادف الصحيح لكلمة "happy":',
        options: ['sad', 'glad', 'angry', 'tired'],
        answer: 1
      },
      {
        q: 'ما معنى عبارة "look for"؟',
        options: ['يقلد', 'يبحث عن', 'ينظر إلى', 'يمشي'],
        answer: 1
      },
      {
        q: 'ما عكس كلمة "expensive"؟',
        options: ['cheap', 'large', 'strong', 'fast'],
        answer: 0
      },
      {
        q: 'ما معنى كلمة "knowledge"؟',
        options: ['معرفة', 'مغامرة', 'ملابس', 'مرحاض'],
        answer: 0
      }
    ]
  },
  grammar: {
    name: 'القواعد',
    icon: 'fa-grammar',
    color: '#0d9488',
    bg: '#d1fae5',
    desc: 'الأزمنة والتراكيب اللغوية',
    questions: [
      {
        q: 'اختر الشكل الصحيح: "He ___ football every Friday."',
        options: ['play', 'plays', 'playing', 'played'],
        answer: 1
      },
      {
        q: 'أي جملة تستخدم أداة التعريف (a/an/the) بشكل صحيح؟',
        options: ['I saw a elephant.', 'I saw an elephant.', 'I saw the elephant yesterday at a zoo.', 'Both b and c are correct.'],
        answer: 3
      },
      {
        q: 'اختر الصيغة الصحيحة: "If I ___ rich, I would travel the world."',
        options: ['am', 'was', 'were', 'be'],
        answer: 2
      },
      {
        q: 'ما الجملة الصحيحة في المقارنة (comparative)؟',
        options: ['She is more tall than me.', 'She is taller than me.', 'She is tallest than me.', 'She taller me.'],
        answer: 1
      },
      {
        q: 'اختر حرف الجر الصحيح: "I am interested ___ learning English."',
        options: ['on', 'in', 'at', 'for'],
        answer: 1
      },
      {
        q: 'أي جملة صحيحة في المبني للمجهول (Passive)?',
        options: [
          'The letter was written by Ali.',
          'The letter wrote by Ali.',
          'The letter is write by Ali.',
          'Ali was write the letter.'
        ],
        answer: 0
      }
    ]
  }
};

/* ------------------------------------------------------------ */
/*  State                                                       */
/* ------------------------------------------------------------ */
let state = {
  mode: null,          // 'all' or specific category key
  list: [],            // array of prepared questions {category, q, options, answer, id}
  current: 0,
  answers: [],         // user's selected index per question (null if unanswered)
  locked: []           // whether the question has been answered/locked
};

/* ------------------------------------------------------------ */
/*  DOM refs                                                    */
/* ------------------------------------------------------------ */
const el = {
  categoriesGrid: document.getElementById('categoriesGrid'),
  categorySection: document.getElementById('categorySection'),
  quizSection: document.getElementById('quizSection'),
  resultsSection: document.getElementById('resultsSection'),
  reviewSection: document.getElementById('reviewSection'),
  reviewList: document.getElementById('reviewList'),
  questionText: document.getElementById('questionText'),
  answersContainer: document.getElementById('answersContainer'),
  currentCategory: document.getElementById('currentCategory'),
  currentQuestionNum: document.getElementById('currentQuestionNum'),
  totalQuestionsNum: document.getElementById('totalQuestionsNum'),
  quizProgressBar: document.getElementById('quizProgressBar'),
  liveScore: document.getElementById('liveScore'),
  prevBtn: document.getElementById('prevBtn'),
  nextBtn: document.getElementById('nextBtn'),
  startAllBtn: document.getElementById('startAllBtn'),
  retryBtn: document.getElementById('retryBtn'),
  homeBtn: document.getElementById('homeBtn'),
  resultsIcon: document.getElementById('resultsIcon'),
  resultsTitle: document.getElementById('resultsTitle'),
  resultsMessage: document.getElementById('resultsMessage'),
  resultsPercent: document.getElementById('resultsPercent'),
  correctCount: document.getElementById('correctCount'),
  wrongCount: document.getElementById('wrongCount'),
  totalCount: document.getElementById('totalCount'),
  totalQuestionsHeader: document.getElementById('totalQuestionsHeader'),
  totalCategoriesHeader: document.getElementById('totalCategoriesHeader')
};

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

/* ------------------------------------------------------------ */
/*  Helpers                                                     */
/* ------------------------------------------------------------ */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function totalQuestions() {
  return Object.values(QUIZ_DATA).reduce((sum, c) => sum + c.questions.length, 0);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Wrap English fragments in <span class="en"> for nicer display
function formatQuestion(text) {
  return escapeHtml(text);
}

/* ------------------------------------------------------------ */
/*  Build category cards                                        */
/* ------------------------------------------------------------ */
function buildCategories() {
  el.categoriesGrid.innerHTML = '';
  el.totalQuestionsHeader.textContent = totalQuestions();
  el.totalCategoriesHeader.textContent = Object.keys(QUIZ_DATA).length;

  Object.entries(QUIZ_DATA).forEach(([key, cat]) => {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.style.setProperty('--cat-color', cat.color);
    card.style.setProperty('--cat-bg', cat.bg);
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.innerHTML = `
      <div class="category-icon"><i class="fas ${cat.icon}"></i></div>
      <h3>${cat.name}</h3>
      <p>${cat.desc}</p>
      <span class="category-count">${cat.questions.length} أسئلة</span>
    `;
    const start = () => startQuiz(key);
    card.addEventListener('click', start);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); start(); }
    });
    el.categoriesGrid.appendChild(card);
  });
}

/* ------------------------------------------------------------ */
/*  Start quiz                                                  */
/* ------------------------------------------------------------ */
function startQuiz(mode) {
  state.mode = mode;
  state.list = [];
  state.answers = [];
  state.locked = [];
  state.current = 0;

  if (mode === 'all') {
    // Prepare all questions (shuffled) with category labels
    Object.entries(QUIZ_DATA).forEach(([key, cat]) => {
      cat.questions.forEach((qq, i) => {
        state.list.push({
          categoryKey: key,
          categoryName: cat.name,
          categoryColor: cat.color,
          ...qq
        });
      });
    });
    state.list = shuffle(state.list);
  } else {
    const cat = QUIZ_DATA[mode];
    cat.questions.forEach((qq) => {
      state.list.push({
        categoryKey: mode,
        categoryName: cat.name,
        categoryColor: cat.color,
        ...qq
      });
    });
  }

  state.answers = new Array(state.list.length).fill(null);
  state.locked = new Array(state.list.length).fill(false);

  el.categorySection.style.display = 'none';
  el.resultsSection.style.display = 'none';
  el.reviewSection.style.display = 'none';
  el.quizSection.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });

  renderQuestion();
}

/* ------------------------------------------------------------ */
/*  Render current question                                     */
/* ------------------------------------------------------------ */
function renderQuestion() {
  const idx = state.current;
  const item = state.list[idx];

  el.quizSection.querySelector('.quiz-container').classList.remove('fade-in');
  void el.quizSection.offsetWidth;
  el.quizSection.querySelector('.quiz-container').classList.add('fade-in');

  // Category tag
  el.currentCategory.innerHTML = `<i class="fas ${QUIZ_DATA[item.categoryKey].icon}"></i> ${item.categoryName}`;
  el.currentCategory.style.background = QUIZ_DATA[item.categoryKey].bg;
  el.currentCategory.style.color = QUIZ_DATA[item.categoryKey].color;

  // Counters
  el.currentQuestionNum.textContent = idx + 1;
  el.totalQuestionsNum.textContent = state.list.length;

  // Progress
  const pct = ((idx) / state.list.length) * 100;
  el.quizProgressBar.style.width = pct + '%';

  // Live score
  updateLiveScore();

  // Question
  el.questionText.innerHTML = formatQuestion(item.q);

  // Answers
  el.answersContainer.innerHTML = '';
  const isLocked = state.locked[idx];
  const chosen = state.answers[idx];

  item.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'answer-option';
    const letter = document.createElement('span');
    letter.className = 'opt-letter';
    letter.textContent = LETTERS[i];
    const text = document.createElement('span');
    text.className = 'opt-text';
    text.textContent = opt;
    btn.appendChild(letter);
    btn.appendChild(text);

    if (isLocked) {
      btn.classList.add('disabled');
      if (i === item.answer) btn.classList.add('correct');
      if (i === chosen && chosen !== item.answer) btn.classList.add('wrong');
      // icon
      const icon = document.createElement('i');
      icon.className = 'opt-icon fas';
      if (i === item.answer) icon.classList.add('fa-check-circle');
      else if (i === chosen) icon.classList.add('fa-times-circle');
      if (i === item.answer || i === chosen) btn.appendChild(icon);
    } else {
      if (chosen === i) btn.classList.add('selected');
      btn.addEventListener('click', () => selectAnswer(i));
    }

    el.answersContainer.appendChild(btn);
  });

  // Nav buttons
  el.prevBtn.disabled = idx === 0;
  updateNextButton();
}

/* ------------------------------------------------------------ */
/*  Answer selection                                            */
/* ------------------------------------------------------------ */
function selectAnswer(i) {
  const idx = state.current;
  if (state.locked[idx]) return;

  state.answers[idx] = i;
  state.locked[idx] = true;

  // Re-render to show correctness immediately
  renderQuestion();
  updateLiveScore();
}

function updateLiveScore() {
  let score = 0;
  state.list.forEach((item, i) => {
    if (state.locked[i] && state.answers[i] === item.answer) score++;
  });
  el.liveScore.textContent = score;
}

function updateNextButton() {
  const isLast = state.current === state.list.length - 1;
  if (isLast) {
    el.nextBtn.classList.add('finish');
    el.nextBtn.innerHTML = 'عرض النتيجة <i class="fas fa-flag-checkered"></i>';
  } else {
    el.nextBtn.classList.remove('finish');
    el.nextBtn.innerHTML = 'التالي <i class="fas fa-chevron-left"></i>';
  }
}

/* ------------------------------------------------------------ */
/*  Navigation                                                  */
/* ------------------------------------------------------------ */
el.prevBtn.addEventListener('click', () => {
  if (state.current > 0) {
    state.current--;
    renderQuestion();
  }
});

el.nextBtn.addEventListener('click', () => {
  if (state.current < state.list.length - 1) {
    state.current++;
    renderQuestion();
  } else {
    finishQuiz();
  }
});

/* ------------------------------------------------------------ */
/*  Finish & results                                            */
/* ------------------------------------------------------------ */
function finishQuiz() {
  let correct = 0;
  state.list.forEach((item, i) => {
    if (state.answers[i] === item.answer) correct++;
  });
  const total = state.list.length;
  const wrong = total - correct;
  const percent = Math.round((correct / total) * 100);

  el.correctCount.textContent = correct;
  el.wrongCount.textContent = wrong;
  el.totalCount.textContent = total;
  el.resultsPercent.textContent = percent;

  // Animate the score circle
  const circle = document.querySelector('.score-circle');
  const deg = (percent / 100) * 360;
  circle.style.background = `conic-gradient(var(--primary-color) ${deg}deg, #e2e8f0 ${deg}deg)`;

  // Icon + message
  el.resultsIcon.classList.remove('good', 'low');
  if (percent >= 80) {
    el.resultsIcon.classList.add('good');
    el.resultsIcon.innerHTML = '<i class="fas fa-trophy"></i>';
    el.resultsTitle.textContent = 'ممتاز! أداء رائع 🎉';
    el.resultsMessage.textContent = 'لقد أتقنت المادة العلمية بشكل ممتاز. استمر في هذا التقدم!';
  } else if (percent >= 50) {
    el.resultsIcon.innerHTML = '<i class="fas fa-thumbs-up"></i>';
    el.resultsTitle.textContent = 'جيد جدًا! 👏';
    el.resultsMessage.textContent = 'أداء جيد، لكن هناك مجال للتحسين. راجع إجاباتك وتعلّم من الأخطاء.';
  } else {
    el.resultsIcon.classList.add('low');
    el.resultsIcon.innerHTML = '<i class="fas fa-book-reader"></i>';
    el.resultsTitle.textContent = 'تحتاج لمزيد من المراجعة 📖';
    el.resultsMessage.textContent = 'لا تقلق! راجع المادة العلمية ثم أعد المحاولة. التعلم عملية مستمرة.';
  }

  el.quizSection.style.display = 'none';
  el.resultsSection.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });

  buildReview();
}

/* ------------------------------------------------------------ */
/*  Review                                                      */
/* ------------------------------------------------------------ */
function buildReview() {
  el.reviewList.innerHTML = '';
  state.list.forEach((item, i) => {
    const chosen = state.answers[i];
    const isCorrect = chosen === item.answer;

    const div = document.createElement('div');
    div.className = 'review-item' + (isCorrect ? '' : ' wrong');

    const head = document.createElement('div');
    head.className = 'review-head';
    head.innerHTML = `<span class="review-num">${i + 1}</span><span class="review-q">${formatQuestion(item.q)}</span>`;
    div.appendChild(head);

    const ansWrap = document.createElement('div');
    ansWrap.className = 'review-answers';

    // correct answer
    const c = document.createElement('div');
    c.className = 'review-ans correct';
    c.innerHTML = `<i class="fas fa-check-circle"></i> الإجابة الصحيحة: <span>${escapeHtml(item.options[item.answer])}</span>`;
    ansWrap.appendChild(c);

    // user's answer if wrong
    if (!isCorrect) {
      const w = document.createElement('div');
      w.className = 'review-ans wrong';
      const txt = chosen === null ? 'لم تُجب' : escapeHtml(item.options[chosen]);
      w.innerHTML = `<i class="fas fa-times-circle"></i> إجابتك: <span>${txt}</span>`;
      ansWrap.appendChild(w);
    }

    div.appendChild(ansWrap);
    el.reviewList.appendChild(div);
  });

  el.reviewSection.style.display = 'block';
}

/* ------------------------------------------------------------ */
/*  Reset / home                                               */
/* ------------------------------------------------------------ */
el.retryBtn.addEventListener('click', () => startQuiz(state.mode));
el.homeBtn.addEventListener('click', () => {
  el.resultsSection.style.display = 'none';
  el.reviewSection.style.display = 'none';
  el.quizSection.style.display = 'none';
  el.categorySection.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

el.startAllBtn.addEventListener('click', () => startQuiz('all'));

/* ------------------------------------------------------------ */
/*  Init                                                        */
/* ------------------------------------------------------------ */
document.addEventListener('DOMContentLoaded', () => {
  buildCategories();
});
