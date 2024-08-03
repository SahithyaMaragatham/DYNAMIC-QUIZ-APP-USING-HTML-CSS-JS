// Define an array of quiz questions
const quizQuestions = [
    {
      question: "What does HTML stand for?",
      options: [
        "HyperText Markup Language", 
        "Hyperlinks and Text Markup Language", 
        "Home Tool Markup Language", 
        "Hyperlinking Text Marking Language"
      ],
      correctAnswer: "HyperText Markup Language"
    },
    {
      question: "Which language is used for styling web pages?",
      options: ["HTML", "JQuery", "CSS", "XML"],
      correctAnswer: "CSS"
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets", 
        "Colorful Style Sheets", 
        "Creative Style System", 
        "Computer Style Sheets"
      ],
      correctAnswer: "Cascading Style Sheets"
    },
    {
      question: "Which JavaScript framework is maintained by Facebook?",
      options: ["Angular", "React", "Vue", "Ember"],
      correctAnswer: "React"
    },
    {
      question: "What is the default port number for HTTP?",
      options: ["80", "443", "21", "8080"],
      correctAnswer: "80"
    },
    {
      question: "Which HTML element is used to define the title of a document?",
      options: ["<meta>", "<title>", "<header>", "<body>"],
      correctAnswer: "<title>"
    },
    {
      question: "What is the correct syntax to include an external JavaScript file?",
      options: [
        '<script href="script.js">', 
        '<script src="script.js">', 
        '<script file="script.js">', 
        '<script link="script.js">'
      ],
      correctAnswer: '<script src="script.js">'
    },
    {
      question: "What is the use of the canva(tag) element in HTML5?",
      options: [
        "To create forms", 
        "To display data", 
        "To draw graphics", 
        "To create links"
      ],
      correctAnswer: "To draw graphics"
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      options: ["style", "class", "styles", "font"],
      correctAnswer: "style"
    }
  ];
  
  
  // Variables to track quiz state
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 60;
  let timerInterval;
  
  // Function to start the quiz
  function startQuiz() {
    // Hide the start button and display the first question
    document.getElementById("start-button").style.display = "none";
    displayQuestion();
    startTimer();
  }
  
  // Function to display a question and its options
  function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");
  
    // Clear previous question and answer options
    questionText.innerHTML = "";
    answerButtons.innerHTML = "";
  
    // Display the current question
    questionText.innerHTML = currentQuestion.question;
  
    // Create answer buttons for each option
    currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.classList.add("answer-button");
      answerButtons.appendChild(button);
  
      // Add click event listener to check the answer
      button.addEventListener("click", function() {
        checkAnswer(option);
      });
    });
  }
  
  // Function to check the selected answer
  function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
  
    // Check if the selected answer is correct
    if (selectedOption === currentQuestion.correctAnswer) {
      score++;
    }
  
    // Move to the next question or end the quiz if all questions are answered
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }
  
  // Function to start the timer
  function startTimer() {
    timeLeft = 60; // reset timer for each quiz
    document.getElementById("timer").textContent = timeLeft; // update timer text
  
    timerInterval = setInterval(function() {
      timeLeft--;
  
      // Update the timer text
      document.getElementById("timer").textContent = timeLeft;
  
      // End the quiz if time runs out
      if (timeLeft <= 0) {
        endQuiz();
      }
    }, 1000);
  }
  
  // Function to end the quiz
  function endQuiz() {
    // Stop the timer
    clearInterval(timerInterval);
  
    // Calculate the score percentage
    const scorePercentage = (score / quizQuestions.length) * 100;
  
    // Display the final score
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score} out of ${quizQuestions.length}</p>
      <p>Score Percentage: ${scorePercentage}%</p>
    `;
  }
  
  // Add event listener to start the quiz when the start button is clicked
  document.getElementById("start-button").addEventListener("click", startQuiz);
  