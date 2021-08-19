var timeValueEl = document.querySelector("#timer");

var questionsEl = document.querySelector("#questions");
var timerTag = document.querySelector("#timer");
//var mainTag = document.querySelector("#main");
var startquizEl = document.querySelector(".text-center");
var startGameBtn = document.querySelector("#start-game-btn");

var questionIndex = 0;

var questionsEl = [
    {
        question: "How do you create a function in Javascript?",
        answerIndex: 3,
        choice: [
            "function;myFunction()",
            "function-myFunction()",
            "function=myFunction()",
            "function myFunction()",
        ]
    },
    {
        question: "How do you write and if statement in Javascript?",
        answerIndex: 0,
        choice: [
            "if (i == 5)",
            "if i = 5 then",
            "if i == 5 then",
            "if i = 5",
        ]
    },
    {
        question: "How does a for loop start?",
        answerIndex: 0,
        choice: [
            "for (i = 0; i <= 5; i++)",
            "for i = 1 to 5",
            "for (i = 0; i <= 5)",
            "for (i <= 5; i++)",

        ]
    },

    {
        question: "Which occurs when the user clicks on an HTML element?",
        answerIndex: 1,
        choice: [
            "onmouseover",
            "onclick",
            "onmouseclick",
            "onchange",
        ]

    }
];

console.log(questionsEl);

var mainTag = document.querySelector("main");
//console.dir(containerTag);
function startQuiz() {

    var timer = 3;

    var countdownTimerID = setInterval(function () {

        timeValueEl.textContent = timer;

        if (timer === 0) {


            clearInterval(countdownTimerID);
            timeValueEl.textContent = "Now!";

            showQuestions();
        }
        timer--;

    }, 1000);

   
}

startGameBtn.addEventListener("click", startQuiz);
 

function showQuestions() {
    console.log("do showQuestions");
    var timer = 5;
    
    mainTag.textContent = "";

    console.log(questionsEl[questionIndex]);

    console.log(questionsEl[questionIndex].choice);

    var questionTag = document.createElement("h3");
    mainTag.appendChild(questionTag);
    questionTag.textContent = questionsEl[questionIndex].question;

    var choiceListTag = document.createElement("ol");
    mainTag.appendChild(choiceListTag);

    // need to render questions to the page

    // need to create start quiz button and then start timer
    

    var questionTimer = setInterval(function() {
        console.log(timer);

        timerTag.textContent = timer + " seconds to answer";
        if (timer === 0) {
        timerTag.textContent = "";

        clearInterval(questionTimer);
        }
        timer--;
    }, 1000);

    for (var i = 0; i < questionsEl[questionIndex].choice.length; i ++) {
        //console.log(questionsEl);
        var choiceTag = document.createElement("li");

        choiceListTag.appendChild((choiceTag));
        choiceTag.textContent = questionsEl[questionIndex].choice[i];

        choiceTag.addEventListener("click", function() {
            clearInterval(questionTimer);
            questionIndex++;
            showQuestions();
        })

       
    }

}

//startQuiz();