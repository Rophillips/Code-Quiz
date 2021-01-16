//## Some of the things that I need are...
//* HTML templates for Right/Wrong, Questions, Answers, High scores
var containerTag = document.querySelector("#container");
var questionTag = document.querySelector("#questions");
var answerTag = document.querySelector("#answers");
var timerTag = document.querySelector("#timer");
var startButton = document.querySelector("#startButton");
var choiceListTag = document.querySelector("#choices");
//var startButton = $("#startButton")
//test link
//console.log("hello");
var questionIndex = 0;
container.textContent = "";


//* Array of questions
var questionArr = [
    {
        question: "How do you create a function in Javascript?",
        answerIndex: 3,
        choices: [
            "function;myFunction()",
            "function-myFunction()",
            "function=myFunction()",
            "function myFunction()",
        ]
    },
    {
        question: "How do you write and if statement in Javascript?",
        answerIndex: 0,
        choices: [
            "if (i == 5)",
            "if i = 5 then",
            "if i == 5 then",
            "if i = 5",
        ]
    },
    {
        question: "How does a for loop start?",
        answerIndex: 0,
        choices: [
            "for (i = 0; i <= 5; i++)",
            "for i = 1 to 5",
            "for (i = 0; i <= 5)",
            "for (i <= 5; i++)",

        ]
    },
    {
        question: "Which occurs when the user clicks on an HTML element?",
        answerIndex: 1,
        choices: [
            "onmouseover",
            "onclick",
            "onmouseclick",
            "onchange",
        ]
    }
];
console.log(questionArr);

function startQuiz(){
    var seconds = 3;
    var timerInterval = setInterval(function() {
        console.log(seconds);

        timerTag.textContent = seconds + "left to start";
        if(seconds === 0){
            //leave blank
            timerTag.textContent = "";

            clearInterval(timerInterval);
            showNextQuestion();
        }
        seconds--;
    },  1000);
    
}
function showNextQuestion() {

    console.log("showNextQuestion");

    var seconds = 60;
    containerTag.textContent = "";




console.log(questionArr[questionIndex]);
console.log(questionArr[questionIndex].question);
console.log(questionArr[questionIndex].choices);

var questionTag = document.createElement("id");
containerTag.appendChild(questionTag);
questionTag.textContent = questionArr[questionIndex].question;

var choiceListTag = document.createElement("ul");
containerTag.appendChild(choiceListTag);

var questionInterval = setInterval(function() {

    timerTag.textContent = seconds + " left to answer";
    if(seconds === 0){
        //timer clear
        timerTag.textContent = "h2";
        //timer to stop
        clearInterval(questionInterval);
        showNextQuestion();
        
    }
    seconds--;
},  1000);



for(var i = 0; i < questionArr[questionIndex].choices.length; i++) {
    var choiceTag = document.createElement("ul");
    choiceListTag.appendChild(choiceTag);
    choiceTag.textContent = questionArr[questionIndex].choices[i];

    choiceTag.addEventListener("click", function(){
        clearInterval(questionInterval);
        questionIndex++;
        showNextQuestion();
    });
}
}
startQuiz();
//jquery
//$("#startButton").on("click", () => {
   // $("h2").text("Javascript Quiz")
//})
//}

//* Timer
//* Click handlers (functions that do click events)
//* Stylesheets for each template
// Array of objects for the high scores (Scoreboard and a way to save