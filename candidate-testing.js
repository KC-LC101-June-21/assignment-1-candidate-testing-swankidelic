const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3",
];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Hello! What name should be on your answers? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  // candidateAnswer = input.question(question);
  for (let i = 0; i < questions.length + 1; i++){
    candidateAnswers[i] = input.question(questions[i]);
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  // if (candidateAnswer === correctAnswer) {
  //   console.log("Awesome! That's correct!");
  // } else {
  //   console.log("Nope, that doesn't match the correct answer. Sorry!");
  // }

  let candidateScore = 0;
  console.log(`Candidate Name: ${candidateName}`);

  for (i = 0; i < questions.length; i++){
    console.log(`${i + 1}) ${questions[i]}`);
    console.log(`Your Answer: ${candidateAnswers[i]}`);
    console.log(`Correct Answer: ${correctAnswers[i]}\n`);

    //NOTE: I used the toLowerCase methods here to make the answers case-insensitive
    //without altering the original arrays -BWG
    if (candidateAnswers[i] === correctAnswers[i]) {candidateScore++;}
  }

  let grade = (candidateScore / questions.length) * 100;

  console.log(`>>> Overall Grade: ${grade}% (${candidateScore} of ${questions.length} correct) <<<`);
  if (grade >= 80) {
    console.log(`>>> Status: Pass <<<`); 
  } else {
    console.log(`>>> Status: FAILED <<<`);
  }
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Welcome, " + candidateName + "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};