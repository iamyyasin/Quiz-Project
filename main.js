//! Quiz
const quizInformation = [
    {
        //? First Quiz
        questiontitle: 'Most active Twitter User?',
        a: 'Fatih Kadir Akın',
        b: 'İlker Kurtel',
        c: 'Didem Küçükkaraaslan',
        d: 'Azmi Mengü',
        e: 'Onur Aslan',
        correct: 'a' 
    },
    {
        //? Second Quiz
        questiontitle: 'Funniest Twitter User?',
        a: 'Fatih Kadir Akın',
        b: 'İlker Kurtel',
        c: 'Didem Küçükkaraaslan',
        d: 'Azmi Mengü',
        e: 'Onur Aslan',
        correct: 'b' 
    },
    {
        //? Thirth Quiz
        questiontitle: 'Top Twitter User?',
        a: 'Fatih Kadir Akın',
        b: 'İlker Kurtel',
        c: 'Didem Küçükkaraaslan',
        d: 'Azmi Mengü',
        e: 'Onur Aslan',
        correct: 'c' 
    },
    {
        //? Fourth Quiz
        questiontitle: 'Most Prolific Twitter User?',
        a: 'Fatih Kadir Akın',
        b: 'İlker Kurtel',
        c: 'Didem Küçükkaraaslan',
        d: 'Azmi Mengü',
        e: 'Onur Aslan',
        correct: 'd' 
    },
    {
        //Todo: Finally Quiz
        questiontitle: 'Co-founder zetupme?',
        a: 'Fatih Kadir Akın',
        b: 'İlker Kurtel',
        c: 'Didem Küçükkaraaslan',
        d: 'Azmi Mengü',
        e: 'Onur Aslan',
        correct: 'e'
    }
]

//! Main Part
const quiz = document.getElementById('questions');
const titles = document.getElementById('questiontitles');
const answers = document.querySelectorAll('.answer');
const button = document.getElementById('continue');

//TODO: Labels Part
const a_text = document.getElementById('ans_a');
const b_text = document.getElementById('ans_b');
const c_text = document.getElementById('ans_c');
const d_text = document.getElementById('ans_d');
const e_text = document.getElementById('ans_e');

let startQuiz = 0;
let score = 0;

//! Quiz Change
insQuiz();

function insQuiz() {
    const activeQuiz = quizInformation[startQuiz];

    titles.innerText = activeQuiz.questiontitle;
    a_text.innerText = activeQuiz.a;
    b_text.innerText = activeQuiz.b;
    c_text.innerText = activeQuiz.c;
    d_text.innerText = activeQuiz.d;
    e_text.innerText = activeQuiz.e;
}

function disableAnswers() {
    answers.forEach((answer) => (answer.checked = false));
}

function getSelected() {
    let ans;

    answers.forEach((answer) => {
        if(answer.checked) {
            ans = answer.id
        }
    })
    return ans;
}

//? Click Button
button.addEventListener('click', (event)=> {
    event.preventDefault();
    const ans = getSelected();

    // console.log(ans);

    if (ans) {
        if (ans === quizInformation[startQuiz].correct) {
            score++;
        }
        startQuiz++;

        if (startQuiz < quizInformation.length) {
            insQuiz();
        }else {
            quiz.style.height='180px';
            quiz.style.width='100%';
            quiz.innerHTML = `
                <h2> The test is complete, ${score * 20} you have scored.🥳 </h2>
                <button id="continue" onClick="location.reload()"> Try again 🏆</button>
            `
        }
    }
})
