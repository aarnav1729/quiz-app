document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        {
            question: "What is the capital of France?",
            answer: "Paris"
        },
        {
            question: "Who painted the Mona Lisa?",
            answer: "Leonardo da Vinci"
        },
            {
            question: "Which planet is known as the Red Planet?",
            answer: "Mars"
            },
            {
            question: "Who wrote the novel 'Pride and Prejudice'?",
            answer: "Jane Austen"
            },
            {
            question: "What is the largest organ in the human body?",
            answer: "Skin"
            },
            {
            question: "Which country is famous for the Great Wall?",
            answer: "China"
            },
            {
            question: "Who is the current President of the United States?",
            answer: "Joe Biden"
            },
            {
            question: "What is the chemical symbol for gold?",
            answer: "Au"
            },
            {
            question: "Which is the largest ocean on Earth?",
            answer: "Pacific Ocean"
            },
            {
            question: "Who invented the telephone?",
            answer: "Alexander Graham Bell"
            },
            {
            question: "What is the tallest mountain in the world?",
            answer: "Mount Everest"
            },
            {
            question: "What is the national flower of Japan?",
            answer: "Cherry blossom"
            },
            {
            question: "Who painted the Sistine Chapel ceiling?",
            answer: "Michelangelo"
            },
            {
            question: "Which city hosted the 2016 Summer Olympics?",
            answer: "Rio de Janeiro"
            },
            {
            question: "What is the chemical symbol for sodium?",
            answer: "Na"
            },
            {
            question: "Who wrote the play 'Hamlet'?",
            answer: "William Shakespeare"
            },
            {
            question: "What is the largest continent by land area?",
            answer: "Asia"
            },
            {
            question: "Who is the author of 'To Kill a Mockingbird'?",
            answer: "Harper Lee"
            },
            {
            question: "Which animal is known as the 'King of the Jungle'?",
            answer: "Lion"
            },
            {
            question: "What is the longest river in the world?",
            answer: "Nile"
            },
            {
            question: "Who is the founder of Microsoft?",
            answer: "Bill Gates"
            },
            {
            question: "Which country is famous for the Taj Mahal?",
            answer: "India"
            },
            {
            question: "Who painted the 'Starry Night'?",
            answer: "Vincent van Gogh"
            },
            {
            question: "What is the largest species of shark?",
            answer: "Whale shark"
            },
            {
            question: "Which city is known as the 'Eternal City'?",
            answer: "Rome"
            },
            {
            question: "Who wrote the novel '1984'?",
            answer: "George Orwell"
            },
            {
            question: "What is the chemical symbol for oxygen?",
            answer: "O"
            },
            {
            question: "Which is the highest-grossing film of all time?",
            answer: "Avengers: Endgame"
            },
            {
            question: "What is the currency of Japan?",
            answer: "Japanese yen"
            },
            {
            question: "Who was the first person to walk on the moon?",
            answer: "Neil Armstrong"
            },
            {
            question: "What is the largest desert in the world?",
            answer: "Sahara Desert"
            },
            {
            question: "Who is the author of 'The Catcher in the Rye'?",
            answer: "J.D. Salinger"
            },
            {
            question: "Which country is famous for the pyramids?",
            answer: "Egypt"
            },
            {
            question: "Who painted the 'Girl with a Pearl Earring'?",
            answer: "Johannes Vermeer"
            },
            {
            question: "What is the symbol for the chemical element iron?",
            answer: "Fe"
            },
            {
            question: "Which is the second-largest country by land area?",
            answer: "Canada"
            },
            {
            question: "Who is the author of 'The Great Gatsby'?",
            answer: "F. Scott Fitzgerald"
            },
            {
            question: "What is the tallest tree species on Earth?",
            answer: "Coast Redwood"
            },
            {
            question: "Which city is known as the 'City of Love'?",
            answer: "Paris"
            },
            {
            question: "Who wrote the play 'Romeo and Juliet'?",
            answer: "William Shakespeare"
            },
            {
            question: "What is the largest species of penguin?",
            answer: "Emperor penguin"
            },
            {
            question: "What is the official language of Brazil?",
            answer: "Portuguese"
            },
            {
            question: "Who is the artist of the painting 'The Persistence of Memory'?",
            answer: "Salvador Dalí"
            },
            {
            question: "What is the highest mountain range in the world?",
            answer: "Himalayas"
            },
            {
            question: "Who is the author of 'The Lord of the Rings'?",
            answer: "J.R.R. Tolkien"
            },
            {
            question: "What is the capital of Italy?",
            answer: "Rome"
            },
            {
            question: "Who painted the 'The Last Supper'?",
            answer: "Leonardo da Vinci"
            },
            {
            question: "Which country is famous for the Colosseum?",
            answer: "Italy"
            },
            {
            question: "Who composed the symphony 'Symphony No. 9'?",
            answer: "Ludwig van Beethoven"
            },
            {
            question: "What is the chemical symbol for silver?",
            answer: "Ag"
            },
            {
            question: "Which is the smallest continent by land area?",
            answer: "Australia"
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
        // Add your hint logic here
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
