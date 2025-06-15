function checkAnswer() {
    // Set the correct answer
    const correctAnswer = "4";
    
    // Get user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    // Get feedback element
    const feedbackElement = document.getElementById('feedback');
    
    if (selectedOption) {
        const userAnswer = selectedOption.value;
        
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red";
        }
    } else {
        feedbackElement.textContent = "Please select an answer!";
        feedbackElement.style.color = "red";
    }
}

// Add event listener to submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
