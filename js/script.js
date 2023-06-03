function getCookieValue(cookieName) {
  var cookieString = document.cookie;
  var cookies = cookieString.split(';');

  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();

      // Check if the cookie name matches
      if (cookie.startsWith(cookieName + '=')) {
          // Extract and return the cookie value
          return cookie.substring(cookieName.length + 1);
      }
  }

  // Cookie not found
  return null;
}
document.addEventListener('DOMContentLoaded', function() {
  // Your code here
  var cookieValue = getCookieValue('cookie');
  if (cookieValue === "true") {
    document.getElementById('openLoginForm').style.display = 'block';
    document.getElementById('openRegistrationForm').style.display = 'block';
    document.getElementById('popup').style.display = 'none';
  } else if (cookieValue === "false") {
    document.getElementById('openLoginForm').style.display = 'none';
    document.getElementById('openRegistrationForm').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
  } else {
    document.getElementById('openLoginForm').style.display = 'none';
    document.getElementById('openRegistrationForm').style.display = 'none';
    document.getElementById("popup").style.display = 'block';
  }
  
  console.log(cookieValue);
  
  // Rest of your code...
  
});

$(document).ready(function(){
  $("#popup").click(function(){
    $(this).hide();
  });
});

// Обработчик нажатия кнопки "Accept"
function acceptCookies() {
  document.cookie = "cookie=true";
  location.reload();
  
  hideCookiePopup();
}

// Обработчик нажатия кнопки "Close"
function closePopup() {
  document.cookie = "cookie=false";
  hideCookiePopup();
  document.getElementById('openLoginForm').style.display = 'none';
  document.getElementById('openRegistrationForm').style.display = 'none';
}

// Скрыть всплывающее окно и затемнение заднего фона
function hideCookiePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Обработчик нажатия кнопки "Sign in"
function openSignIn() {
    // Добавьте код для открытия окна входа или выполнения соответствующих действий
    console.log("Opening Sign in window...");
}
function startLoadingAnimation(event) {
    event.preventDefault(); // Отменить стандартное действие перехода по ссылке

    var clickSound = document.getElementById('click-sound');
    var loadingOverlay = document.getElementById('loading-overlay');
    var loadingSpinner = document.getElementById('loading-spinner');
    
    clickSound.play();

    loadingOverlay.style.display = 'block';
    loadingSpinner.style.display = 'block';
    
    setTimeout(function() {
        window.location.href = event.target.href; // Выполнить переход на ссылку после задержки
    }, 2000);
}
function test (event){
    event.preventDefault();
    var questions = [{ 
        question: 'Is this correct sentence?: This are apple (answer yes or no)',
        answer: 'no',
        affirm: 'Yay! You got it right!',
        rebuttal: 'Nope, this is not correct.'
    },
    {
        question: 'Is this correct sentence?: Is this okey (answer yes or no)',
        answer: 'yes',
        affirm: 'Good job!',
        rebuttal: 'Not right.'
    }];
    var correct =0;
    for (var i = 0, l = questions.length; i < l; i++) {
    answer = prompt(questions[i].question);
    
    // I do not support manipulating a loop counter mid-loop, but it's for an example.
    if (answer !== questions[i].answer) {
        alert(questions[i].rebuttal);
        
    } else {
        alert(questions[i].affirm);
        correct++;
    }
    }
    if (correct===2){
        alert("You know english well")
    }else if (correct===1){
        alert("You need to learn more")
    }else{
        alert("You do not know anything")
    }
    // alert("You have got " +correct+ " out of 2");
}
var form = document.getElementById("myForm");
var successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page refresh

  // Get input values
  var name = document.getElementById("nameInput").value;
  var phone = document.getElementById("phoneInput").value;
  var email = document.getElementById("emailInput").value;

  // Here, you can add your code to send form data to the server using AJAX or fetch API

  // Show success message
  successMessage.classList.remove("hidden");

  // Reset form inputs
  form.reset();
});
function updateContent() {
    var name = document.getElementById("nameInput").value;
    var notification = document.getElementById("notification");
  
    // Проверяем, что поле с именем не пустое
    if (name.trim() !== "") {
      // Обновляем содержимое уведомления
      notification.innerHTML = "The data has been sent successfully. Hi, " + name + "!";
      notification.style.display = "block";
    } else {
      // Если поле с именем пустое, выводим сообщение об ошибке
      notification.innerHTML = "Please enter your name.";
      notification.style.display = "block";
    }
  }
 



//
var score = 0;
var progress = 0;
var level = "Начинающий";
var currentQuestion = 0;

var questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: 0
  },
  {
    question: "Which language is spoken in Brazil?",
    options: ["Spanish", "Portuguese", "Italian", "English"],
    answer: 1
  },
  {
    question: "What is the error in this sentence: 'I goed to the store.'?",
    options: ["goed", "the", "store", "No error"],
    answer: 0
  }
];

function startGame() {
  showQuestion();
}

function showQuestion() {
  var questionElement = document.getElementById("question");
  var optionsElements = document.getElementById("options").getElementsByTagName("button");
  
  if (currentQuestion < questions.length) {
    questionElement.innerHTML = questions[currentQuestion].question;
    
    for (var i = 0; i < optionsElements.length; i++) {
      optionsElements[i].innerHTML = questions[currentQuestion].options[i];
    }
  } else {
    questionElement.innerHTML = "Игра окончена!";
    disableOptions();
  }
}

function checkAnswer(selectedOption) {
  var resultElement = document.getElementById("result");
  
  if (currentQuestion < questions.length) {
    var correctAnswer = questions[currentQuestion].answer;
    
    if (selectedOption === correctAnswer) {
      resultElement.innerHTML = "Правильно!";
      score++;
      progress++;
    } else {
      resultElement.innerHTML = "Неправильно!";
      progress++;
    }
    
    currentQuestion++;
    updateScore();
    updateProgress();
    showQuestion();
  }
}

function updateScore() {
  var scoreElement = document.getElementById("score-value");
  scoreElement.innerHTML = score;
}

function updateProgress() {
  var progressElement = document.getElementById("progress-value");
  progressElement.innerHTML = progress;
  
  if (progress === 10) {
    level = "Продвинутый";
  } else if (progress === 5) {
    level = "Средний";
  }
  
  var levelElement = document.getElementById("level-value");
  levelElement.innerHTML = level;
}

function disableOptions() {
  var optionsElements = document.getElementById("options").getElementsByTagName("button");
  
  for (var i = 0; i < optionsElements.length; i++) {
    optionsElements[i].disabled = true;
  }
}

startGame();


