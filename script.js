document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        {
            question: "What is the capital of France?",
            answer: "Paris",
            hint: "The city of love"
        },
        {
            question: "Who painted the Mona Lisa?",
            answer: "Leonardo da Vinci",
            hint: "Italian Renaissance artist"
        },
        {
            question: "Which planet is known as the Red Planet?",
            answer: "Mars",
            hint: "Fourth planet from the Sun"
        },
        {
            question: "Who wrote the novel 'Pride and Prejudice'?",
            answer: "Jane Austen",
            hint: "English female author"
        },
        {
            question: "What is the largest organ in the human body?",
            answer: "Skin",
            hint: "Covers the entire body"
        },
        {
            question: "Which country is famous for the Great Wall?",
            answer: "China",
            hint: "Most populous country in the world"
        },
        {
            question: "Who is the current President of the United States?",
            answer: "Joe Biden",
            hint: "Took office in January 2021"
        },
        {
            question: "What is the chemical symbol for gold?",
            answer: "Au",
            hint: "Derived from the Latin word 'aurum'"
        },
        {
            question: "Which is the largest ocean on Earth?",
            answer: "Pacific Ocean",
            hint: "Covers about one-third of the Earth's surface"
        },
        {
            question: "Who invented the telephone?",
            answer: "Alexander Graham Bell",
            hint: "Scottish-born scientist and inventor"
        },
        {
            question: "What is the tallest mountain in the world?",
            answer: "Mount Everest",
            hint: "Located in the Himalayas"
        },
        {
            question: "What is the national flower of Japan?",
            answer: "Cherry blossom",
            hint: "Symbolizes the ephemeral nature of life"
        },
        {
            question: "Who painted the Sistine Chapel ceiling?",
            answer: "Michelangelo",
            hint: "Italian artist and sculptor"
        },
        {
            question: "Which city hosted the 2016 Summer Olympics?",
            answer: "Rio de Janeiro",
            hint: "Brazilian city known for its beaches and iconic statue"
        },
        {
            question: "What is the chemical symbol for sodium?",
            answer: "Na",
            hint: "Derived from the Latin word 'natrium'"
        },
        {
            question: "Who wrote the play 'Hamlet'?",
            answer: "William Shakespeare",
            hint: "Considered one of the greatest playwrights in history"
        },
        {
            question: "What is the largest continent by land area?",
            answer: "Asia",
            hint: "Home to the world's highest peak, Mount Everest"
        },
        {
            question: "Who is the author of 'To Kill a Mockingbird'?",
            answer: "Harper Lee",
            hint: "American novelist"
        },
        {
            question: "Which animal is known as the 'King of the Jungle'?",
            answer: "Lion",
            hint: "Feline species"
        },
        {
            question: "What is the longest river in the world?",
            answer: "Nile",
            hint: "Flows through northeastern Africa"
        },
        {
            question: "Who is the founder of Microsoft?",
            answer: "Bill Gates",
            hint: "Co-founder of a major technology company"
        },
        {
            question: "Which country is famous for the Taj Mahal?",
            answer: "India",
            hint: "Located in South Asia"
        },
        {
            question: "Who painted the 'Starry Night'?",
            answer: "Vincent van Gogh",
            hint: "Dutch post-impressionist painter"
        },
        {
            question: "What is the largest species of shark?",
            answer: "Whale shark",
            hint: "Filter-feeding shark"
        },
        {
            question: "Which city is known as the 'Eternal City'?",
            answer: "Rome",
            hint: "Capital of Italy"
        },
        {
            question: "Who wrote the novel '1984'?",
            answer: "George Orwell",
            hint: "English author and journalist"
        },
        {
            question: "What is the chemical symbol for oxygen?",
            answer: "O",
            hint: "Essential gas for sustaining life"
        },
        {
            question: "Which is the highest-grossing film of all time?",
            answer: "Avengers: Endgame",
            hint: "Superhero film from the Marvel Cinematic Universe"
        },
        {
            question: "What is the currency of Japan?",
            answer: "Japanese yen",
            hint: "Unit of money in Japan"
        },
        {
            question: "Who was the first person to walk on the moon?",
            answer: "Neil Armstrong",
            hint: "Apollo 11 astronaut"
        },
        {
            question: "What is the largest desert in the world?",
            answer: "Sahara Desert",
            hint: "Located in northern Africa"
        },
        {
            question: "Who is the author of 'The Catcher in the Rye'?",
            answer: "J.D. Salinger",
            hint: "American writer"
        },
        {
            question: "Which country is famous for the pyramids?",
            answer: "Egypt",
            hint: "Located in northeastern Africa"
        },
        {
            question: "Who painted the 'Girl with a Pearl Earring'?",
            answer: "Johannes Vermeer",
            hint: "Dutch Golden Age painter"
        },
        {
            question: "What is the symbol for the chemical element iron?",
            answer: "Fe",
            hint: "Derived from the Latin word 'ferrum'"
        },
        {
            question: "Which is the second-largest country by land area?",
            answer: "Canada",
            hint: "Located in North America"
        },
        {
            question: "Who is the author of 'The Great Gatsby'?",
            answer: "F. Scott Fitzgerald",
            hint: "American author of the Jazz Age"
        },
        {
            question: "What is the tallest tree species on Earth?",
            answer: "Coast Redwood",
            hint: "Native to the Pacific coast of North America"
        },
        {
            question: "Which city is known as the 'City of Love'?",
            answer: "Paris",
            hint: "Famous for its romantic atmosphere"
        },
        {
            question: "Who wrote the play 'Romeo and Juliet'?",
            answer: "William Shakespeare",
            hint: "Tragic love story"
        },
        {
            question: "What is the largest species of penguin?",
            answer: "Emperor penguin",
            hint: "Native to Antarctica"
        },
        {
            question: "What is the official language of Brazil?",
            answer: "Portuguese",
            hint: "Spoken in multiple countries"
        },
        {
            question: "Who is the artist of the painting 'The Persistence of Memory'?",
            answer: "Salvador Dalí",
            hint: "Spanish surrealist painter"
        },
        {
            question: "What is the highest mountain range in the world?",
            answer: "Himalayas",
            hint: "Located in Asia"
        },
        {
            question: "Who is the author of 'The Lord of the Rings'?",
            answer: "J.R.R. Tolkien",
            hint: "English writer and philologist"
        },
        {
            question: "What is the capital of Italy?",
            answer: "Rome",
            hint: "Home to Vatican City"
        },
        {
            question: "Who painted the 'The Last Supper'?",
            answer: "Leonardo da Vinci",
            hint: "Italian polymath"
        },
        {
            question: "Which country is famous for the Colosseum?",
            answer: "Italy",
            hint: "Located in southern Europe"
        },
        {
            question: "Who composed the symphony 'Symphony No. 9'?",
            answer: "Ludwig van Beethoven",
            hint: "German composer and pianist"
        },
        {
            question: "What is the chemical symbol for silver?",
            answer: "Ag",
            hint: "Derived from the Latin word 'argentum'"
        },
        {
            question: "Which is the smallest continent by land area?",
            answer: "Australia",
            hint: "Located in the Southern Hemisphere"
        }
    ];

    let score = 0;
    let currentQuestionIndex = 0;

    const questionText = document.getElementById("question-text");
    const answerInput = document.getElementById("answer-input");
    const submitButton = document.getElementById("submit-button");
    const hintButton = document.getElementById("hint-button");
    const answerButton = document.getElementById("answer-button");
    const feedbackText = document.getElementById("feedback-text");
    const previousButton = document.getElementById("previous-button");
    const nextButton = document.getElementById("next-button");

    function showQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        answerInput.value = "";
        feedbackText.textContent = "";
    }

    function submitAnswer() {
        const userAnswer = answerInput.value.trim().toLowerCase();
        const currentQuestion = questions[currentQuestionIndex];

        if (userAnswer === currentQuestion.answer.toLowerCase()) {
            score++;
            feedbackText.textContent = "Correct!";
            feedbackText.style.color = "green";
        } else {
            feedbackText.textContent = "Incorrect. Try again!";
            feedbackText.style.color = "red";
        }
    }

    function showHint() {
          const currentQuestion = questions[currentQuestionIndex];
          const hint = currentQuestion.hint;
        
          // Create a popup element
          const popup = document.createElement("div");
          popup.classList.add("popup");
        
          // Create the hint content
          const hintContent = document.createElement("p");
          hintContent.textContent = `Hint: ${hint}`;
          hintContent.classList.add("hint-content");
        
          // Create the close button
          const closeButton = document.createElement("button");
          closeButton.textContent = "Close";
          closeButton.classList.add("close-button");
        
          // Add the hint content and close button to the popup
          popup.appendChild(hintContent);
          popup.appendChild(closeButton);
        
          // Append the popup to the document body
          document.body.appendChild(popup);
        
          // Close the popup when the close button is clicked
          closeButton.addEventListener("click", function () {
            document.body.removeChild(popup);
  });
}


    function viewAnswer() {
        const currentQuestion = questions[currentQuestionIndex];
        alert(currentQuestion.answer);
    }

    function showNextQuestion() {
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        showQuestion();
    }

    function showPreviousQuestion() {
        currentQuestionIndex = (currentQuestionIndex - 1 + questions.length) % questions.length;
        showQuestion();
    }

    submitButton.addEventListener("click", submitAnswer);
    hintButton.addEventListener("click", showHint);
    answerButton.addEventListener("click", viewAnswer);
    previousButton.addEventListener("click", showPreviousQuestion);
    nextButton.addEventListener("click", showNextQuestion);

    showQuestion();
});
