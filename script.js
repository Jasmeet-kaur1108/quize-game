const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markdown Language",
      "HyperText Markup Language",
      "Home Tool Markup Language",
      "Hyper Trainer Marking Language"
    ],
    answer: "HyperText Markup Language"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: "CSS"
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  optionsEl.innerHTML = "";

  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => selectAnswer(option);
    optionsEl.appendChild(button);
  });
}

function selectAnswer(option) {
  const currentQuestion = questions[currentQuestionIndex];
  if (option === currentQuestion.answer) {
    score++;
  }
  nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    nextBtn.style.display = "none";
    showQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  quizBox.style.display = "none";
  resultBox.style.display = "block";
  scoreEl.textContent = `${score} / ${questions.length}`;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  quizBox.style.display = "block";
  resultBox.style.display = "none";
  showQuestion();
  nextBtn.style.display = "none";
}

showQuestion();
