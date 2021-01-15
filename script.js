//## Some of the things that I need are...
//* HTML templates for Right/Wrong, Questions, Answers, High scores
var container = document.querySelector("#container");
var questions = document.querySelector("#questions");
var answers = document.querySelector("#answers");
var timer = document.querySelector("#timer");
var startButton = document.querySelector("#startButton");
//var startButton = $("#startButton")
//test link
//console.log("hello");
var questionIndex = 0;
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
//jquery
$("#startButton").on("click", () => {
    $("h1").text("This is dynamically created")
})
//* Timer
//* Click handlers (functions that do click events)
//* Stylesheets for each template
//* Array of objects for the high scores (Scoreboard and a way to save it)