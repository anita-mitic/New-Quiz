//Create questions
var questions = [
    new Question("What is the capital of Serbia?", ["Belgrade", "Ljubljana"], "Belgrade"),
    new Question("What is the capital of Ireland?", ["Dublin", "Amsterdam"], "Dublin"),
    new Question("What is the capital of France?", ["London", "Paris"], "Paris"),
  
];

var quiz = new Quiz(questions);

QuizUI.displayNext();