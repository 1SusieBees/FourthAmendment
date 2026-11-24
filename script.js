
function checkAnswer(isCorrect) {
    const result = document.getElementById("result");

    if (isCorrect) {
        result.textContent = "Correct! Great job!";
        result.style.color = "#226F54";
    } else {
        result.textContent = "Not quite. Try again!";
        result.style.color = "#742D35";
    }
}
