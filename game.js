
// //variables
// var containerTag = document.querySelector("#container");
// var questionTag = document.querySelector("#question");
// var answerTag = document.querySelector("#answers");
// var timerTag = document.querySelector("#timer");
// var startButton = document.querySelector("#startButton");
// var choiceListTag = document.querySelector("#choices");



// var question = 0;
// var questionIndex = 0;
// container.textContent = "";


  
// // Array of questions
// var questionArr = [
//     {
//         question: "How do you create a function in Javascript?",
//         answerIndex: 3,
//         choices: [
//             "function;myFunction()",
//             "function-myFunction()",
//             "function=myFunction()",
//             "function myFunction()",
//         ]
//     },
//     {
//         question: "How do you write and if statement in Javascript?",
//         answerIndex: 0,
//         choices: [
//             "if (i == 5)",
//             "if i = 5 then",
//             "if i == 5 then",
//             "if i = 5",
//         ]
//     },
//     {
//         question: "How does a for loop start?",
//         answerIndex: 0,
//         choices: [
//             "for (i = 0; i <= 5; i++)",
//             "for i = 1 to 5",
//             "for (i = 0; i <= 5)",
//             "for (i <= 5; i++)",

//         ]
//     },
//     {
//         question: "Which occurs when the user clicks on an HTML element?",
//         answerIndex: 1,
//         choices: [
//             "onmouseover",
//             "onclick",
//             "onmouseclick",
//             "onchange",
//         ]
//     }
// ];


// console.log(questionArr);
//    //seconds to start quiz
// function startQuiz(){
//     var seconds = 3;
//     var timerInterval = setInterval(function() {
//         console.log(seconds);

//         timerTag.textContent = seconds + "left to start";
//         if(seconds === 0){
//             //clear timer
//             timerTag.textContent = "";

//             clearInterval(timerInterval);

//             showNextQuestion();
//         }
//         seconds--;
//     },  1000);
   
// };


// function showNextQuestion() {

//     //console.log("do showNextQuestion");

//     var seconds = 30;
//     //leave blank
//     containerTag.textContent = "";




// console.log(questionArr[questionIndex]);
// console.log(questionArr[questionIndex].question);
// console.log(questionArr[questionIndex].choices);

// var questionTag = document.createElement("h1");
// containerTag.appendChild(questionTag);
// questionTag.textContent = questionArr[questionIndex].question;

// var choiceListTag = document.createElement("ol");
// containerTag.appendChild(choiceListTag);

// var questionInterval = setInterval(function() {

//     timerTag.textContent = seconds + " left to answer";
//     if(seconds === 0){
//         //timer clear
//         timerTag.textContent = "";
//         //timer to stop
//         clearInterval(questionInterval);
//         showNextQuestion();
        
//     }
//     seconds--;
// },  1000);



// for(var i = 0; i < questionArr[questionIndex].choices.length; i++) {
//     var choiceTag = document.createElement("li");
//     choiceListTag.appendChild(choiceTag);
//     choiceTag.textContent = questionArr[questionIndex].choices[i];

//     choiceTag.addEventListener("click", function(){
//         clearInterval(questionInterval);
//         questionIndex++;
//         showNextQuestion();
//     })
        
    
// }
// }
// //calls quiz to start
// startQuiz();



