//var questionTag = document.querySelector("#questionTag"); 
//var question = document.getElementById("#questionArr");
var startBtn = document.querySelector("#startBtn");
//var timer = document.querySelector("#timer");
var answerChoice = document.querySelector("#answerChoice");
var questionArr = document.querySelector("#questionArr");
var addBtn = document.querySelector(".btn1");





var questionIndex = 0;
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
console.log(questionArr);
var score = 0;
//loop over every question object

// for (var i = 0; i < questionArr.length; i++) {
//     //console.log(questionArr[i]);
//     var answerChoice = confirm(questionArr[i].question);


// }
var containerTag = document.querySelector("#container");
var timerTag = document.querySelector("#timer");

function startQuiz() {
    document.querySelector("#startBtn")
    console.log("startQuiz");
   
    var seconds = 3;
    var timerInterval = setInterval(function() {

        console.log(seconds);

        timerTag.textContent = seconds + " left until the quiz starts";

        if (seconds === 0) {

            timerTag.textContent = "";
            clearInterval(timerInterval);

            showNextQuestion();
        }
        seconds--;
    }, 1000);
    
}
function showNextQuestion() {
    console.log("next question please");

    //var seconds = 60;

    containerTag.textContent = "";

    console.log(questionArr[questionIndex]);

    console.log(questionArr[questionIndex].question);
    console.log(questionArr[questionIndex].choices);

    var questionTag = document.createElement("h2");
    containerTag.appendChild(questionTag);
    questionTag.textContent = questionArr[questionIndex].question;

    var choiceListTag = document.createElement("ol");
    containerTag.appendChild(choiceListTag);

    var questionInterval = setInterval(function() {
        //console.log(seconds);

        //start timer
        //timerTag.textContent = seconds + " left to answer";
        if (seconds === 0) {
            timerTag.textContent = " ";

        // end timer
            clearInterval(questionInterval);

            showNextQuestion();
        }
        seconds--;
    }, 1000);

    for(var i = 0; i < questionArr.length; i++){
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



// function questions() {
//     document.querySelector("#questionArr")
//     console.log("hi");

    
// }

startQuiz();
//questions();
//showNextQuestion();