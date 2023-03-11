const inputEl =  document.getElementById('userInput');
const submitBtn = document.getElementById('button');
const currentScoreEl = document.getElementById('currentScore');
let correctAnswer = generateQuestion();
let score = localStorage.getItem("Score") ? JSON.parse(localStorage.getItem('Score')): 0;

function generateQuestion(){
    const num1 = Math.ceil(Math.random()*10);
    const num2 = Math.ceil(Math.random()*10);
    const num1El = document.getElementById('multiplier');
    const num2El = document.getElementById('multiplicand');
    num1El.textContent = num1;
    num2El.textContent = num2;
    return num1*num2;
}
function updateScore(currentScore){
    score = currentScore;
    currentScoreEl.textContent = score;
    localStorage.setItem("Score", JSON.stringify(score));
}
function submitAnswer(event){
    event.preventDefault();
    const userAnswer = +inputEl.value;
    const rightAnswer = correctAnswer;
    userAnswer === rightAnswer ? updateScore(score + 1): updateScore(score - 1);  
    correctAnswer = generateQuestion();
    location.reload();
}
updateScore(score);


submitBtn.addEventListener('click', submitAnswer);