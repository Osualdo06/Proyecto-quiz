const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

const questions = [
    {
        question: 'What is the main focus of the presentation mentioned in the Presentation?',
        answers: [
            { text: 'A-) Introducing new hardware tools to improve team collaboration', correct: false },
            { text: 'B-) Implementing strategies to effectively use keyboard shortcuts and AI tools to optimize team performance.', correct: true },
            { text: 'C-) Training teams to use social media for better marketing strategies.', correct: false },
           
        ]
    },

    {
        question: 'Which keyboard shortcut allows you to reopen the last closed tab in a browser?',
        answers: [
            { text: 'A-) Alt + Shift + R', correct: false },
            { text: 'B-) Ctrl + Shift + W', correct: false },
            { text: 'C-) Ctrl + Shift + T (Correct)', correct: true },
            
        ]
    },
 {
        question: 'Why are keyboard shortcuts important for team members according to the presentation?',
        answers: [
            { text: 'A-) They can help reduce the time spent on repetitive tasks, allowing team members to focus on more critical activities.', correct: true },
            { text: 'B-)They are only beneficial for personal use, not for team productivity.', correct: false },
            { text: 'C-) They are useful only for switching between applications.', correct: false },
            
        ]
    },

    {
        question: 'What is one key benefit of integrating AI technologies into your workflow according to the presentation?',
        answers: [
            { text: 'A-) AI allows team members to focus on more strategic initiatives by automating routine tasks.', correct: true },
            { text: 'B-)AI completely replaces the need for human input, eliminating all human involvement in tasks.', correct: false },
            { text: 'C-)  AI increases the number of mundane tasks team members have to complete, reducing overall efficiency.', correct: false },
            
        ]
    },

    {
        question: 'How can applications like ChatGPT help reduce time spent on repetitive office tasks?',
        answers: [
            { text: 'A-) ChatGPT can generate email templates, summarize documents, and assist with data entry, allowing employees to focus on more complex work.', correct: true },
            { text: 'B-)ChatGPT can be used to physically deliver office supplies, speeding up the restocking process.', correct: false },
            { text: 'C-)  ChatGPT can schedule in-person meetings and manage office equipment repairs directly.', correct: false },
            
        ]
    },
    
    
    // Agrega más preguntas aquí
];

let currentQuestionIndex = 0;

function startGame() {
    currentQuestionIndex = 0;
    nextButton.classList.add('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    const correct = answer.correct;
    if (correct) {
        alert('¡Correcto!');
    } else {
        alert('Incorrecto. Intenta de nuevo.');
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        nextButton.style.display = 'block';
    } else {
        alert('¡Has completado el concurso de trivia!');
        // Reiniciar el juego o finalizar
    }
}

nextButton.addEventListener('click', () => {
    nextButton.style.display = 'none';
    showQuestion(questions[currentQuestionIndex]);
});

startGame();