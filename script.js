//## Some of the things that I need are...
//* HTML templates for Right/Wrong, Questions, Answers, High scores
var container = document.querySelector("#container");
var questions = document.querySelector("#questions");
var answers = document.querySelector("#answers");
var timer = document.querySelector("#timer");
var startButton = document.querySelector("#startButton");
var stahtButton = $("#startButton")
//test link
//console.log("hello");
//* Array of questions
//vanilla js
startButton.addEventListener("click", () => {
    alert("This is from the vanilla JS definition")
})
//jquery
$("#startButton").on("click", () => {
    $("h1").text("This is dynamically created")
})
//* Timer
//* Click handlers (functions that do click events)
//* Stylesheets for each template
//* Array of objects for the high scores (Scoreboard and a way to save it)