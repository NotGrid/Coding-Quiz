var startQuizButton = document.getElementById('startbutton');
var startQuizDiv = document.getElementById('startquiz');
var gameoverDiv = document.getElementById("gameover");
var questionsEl = document.getElementById('questions');
var quizTimer = document.getElementById("timer");
var highscoreInputName = document.getElementById("initials");
var finalScoreEl = document.getElementById("finalscore");
var submitScoreBtn = document.getElementById("submitscore");
var highscoreContainer = document.getElementById("highscorecontainer");
var highscoreDiv = document.getElementById("highscoreage");
var endGameBtns = document.getElementById("gameoverbuttons");
var buttonA = document.getElementById('a');
var buttonB = document.getElementById('b');
var buttonC = document.getElementById('c');
var buttonD = document.getElementById('d');



// object containing questions
var quizQuestions = [{
    question: "Which built-in method returns the calling string value converted to upper case?",
    choiceA: "toUpperCase()",
    choiceB: "toUpper()",
    choiceC: "changeCase(case)",
    choiceD: "None of the above",
    correctAnswer: "a"
},
{
    question: "Which of the following type of variables is visible everywhere in your JavaScript code?",
    choiceA: "Local Variable",
    choiceB: "Global Variable",
    choiceC: "Universal Variable",
    choiceD: "None of the above",
    correctAnswer: "b"
},
{
    quesion: "How may elements can you apply an 'ID' attribute to?",
    choiceA: "2",
    choiceB: "3",
    choiceC: "Unlimited",
    choiceD: "1",
    correctAnswer: "d"
},
{
    quesion: "Which is NOT a Javascript operator?",
    choiceA: "===",
    choiceB: "!==",
    choiceC: "@@",
    choiceD: "<=",
    correctAnswer: "c"
},
{
    quesion: "Which is a JavaScript Data type?",
    choiceA: "Number",
    choiceB: "String",
    choiceC: "Object",
    choiceD: "All of the above",
    correctAnswer: "d"
},
];
var currentQuestionIndex = 0;
var finalQuestionIndex = quizQuestions.length;
var timerInterval;
var timeLeft = 60;

// generates questions and answers inside the object
function generateQuizQuestion() {
    gameoverDiv.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex) {
        return showScore();
    }
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
};
// starts the timer and displays the questions
function startQuiz() {
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    generateQuizQuestion();

    timerInterval = setInterval(function () {
        timeLeft--;
        quizTimer.textContent = "Time left: " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            showScore();
        }
    }, 1000);
    quizBody.style.display = "block";
}
// Once timer runs out or quiz is completed, this page will display the overall score
function showScore() {
    quizBody.style.display = "none"
    gameoverDiv.style.display = "flex";
    clearInterval(timerInterval);
    highscoreInputName.value = "";
    finalScoreEl.innerHTML = "You got " + score + " out of " + quizQuestions.length + " correct!";
}

// On click of the submit button, we run the function highscore that saves and stringifies the array of high scores already saved in local stoage
// as well as pushing the new user name and score into the array we are saving in local storage. Then it runs the function to show high scores.
submitScoreBtn.addEventListener("click", function highscore() {


    if (highscoreInputName.value === "") {
        alert("Initials cannot be blank");
        return false;
    } else {
        var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        var currentUser = highscoreInputName.value.trim();
        var currentHighscore = {
            name: currentUser,
            score: score
        };

        gameoverDiv.style.display = "none";
        highscoreContainer.style.display = "flex";
        highscoreDiv.style.display = "block";
        endGameBtns.style.display = "flex";

        savedHighscores.push(currentHighscore);
        localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
        generateHighscores();

    }

});

startQuizButton.addEventListener('click', startQuiz);

// TODO: Create Highscore function to clear highscores from local storage
// TODO: Create highscore page to display while hiding other pages
// TODO: Add replay function
// TODO: Add function to check responses to answers