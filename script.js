var questionTag = document.querySelector("#questionTag");
// var question = document.getElementById("#questionArr");
var startBtn = document.querySelector("#startBtn");
var timer = document.querySelector("#timer");
var answerChoice = document.querySelector("#answerChoice");
var questionArr = document.querySelector("#questionArr");







//questions array
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
var score = 0;
//loop over every question object

// for (var i = 0; i < questionArr.length; i++) {
//     //console.log(questionArr[i]);
//     var answerChoice = confirm(questionArr[i].question);


// }

function startQuiz() {
    document.querySelector("#startBtn")
    console.log("startQuiz");
    // setTime();
    // ShowNextQuestion();
    
}
function questions(questionArr) {
    document.querySelector("#questionArr")
    console.log("hi");

    if (questionIndex < questionArr.length) {
        
    }
    
}

startQuiz();
questions();