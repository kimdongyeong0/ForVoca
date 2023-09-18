 // Define your vocabulary data
 const vocabularyList = [
    { englishWord: "apple", koreanTranslation: "사과" },
    { englishWord: "book", koreanTranslation: "책" },
    // Add more words to the list
];

let currentIndex = -1; // Initialize to -1 to start with a random word

// Function to display a random word
function showRandomWord() {
    const randomIndex = Math.floor(Math.random() * vocabularyList.length);
    
    // Ensure that the same word is not displayed consecutively
    if (randomIndex !== currentIndex) {
        currentIndex = randomIndex;
        const word = vocabularyList[currentIndex];
        document.getElementById('wordDisplay').textContent = word.englishWord;
        document.getElementById('resultDisplay').textContent = ""; // Clear the result display
        document.getElementById('answerInput').value = ""; // Clear the input field
    } else {
        showRandomWord(); // Try again if the same word is selected
    }
}

// Function to check the user's answer
function checkAnswer() {
    const userAnswer = document.getElementById('answerInput').value;
    const correctAnswer = vocabularyList[currentIndex].koreanTranslation;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById('resultDisplay').textContent = "Correct!";
    } else {
        document.getElementById('resultDisplay').textContent = "Incorrect. Try again.";
    }
}

// Initialize the app
showRandomWord();

// Attach the checkAnswer function to the Check button
document.getElementById('checkButton').addEventListener('click', checkAnswer);

// Show a new random word after a correct answer
document.getElementById('checkButton').addEventListener('click', function() {
    if (document.getElementById('resultDisplay').textContent === "Correct!") {
        setTimeout(showRandomWord, 2000);
    }
});