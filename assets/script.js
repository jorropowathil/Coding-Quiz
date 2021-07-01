// question variable with quetions, choices and answer
var problem = [
  {
  question: "What does CSS stand for?",
  options: ["Colorful style sheet", "Cool style sheet", "Cascading style sheet", "Comical styling slides"],
  answer: 2
}, 
{
  question: "What does HTML stand for?",
  options: ["hypertext markdown language","answer b","answer c", "answer d"],
  answer: 1
},
{
  question: "Question 3",
  options: ["answer a","answer b","answer c", "answer d"],
  answer: 1
},
{
  question: "Question 4",
  options: ["answer a","answer b","answer c", "answer d"],
  answer: 1
},
{
  question: "Question 5",
  options: ["answer a","answer b","answer c", "answer d"],
  answer: 1
},
];

var startButtonEl = document.getElementById("start");
var answerChoices= document.getElementsByClassName("choice");
var questionText= document.getElementsByClassName("quizQuestion");

startButtonEl.addEventListener("click", function() { 
  console.log("Hello!");
  startButtonEl.style.display = "none";
  alert("Once you pick a choice, you cant change it!");
  if (startButtonEl.style.display="none") {  
    for (let i = 0; i < problem.length; i++) {
      console.log(problem);
      questionText.innerHTML=" ";
    }
  }
})

