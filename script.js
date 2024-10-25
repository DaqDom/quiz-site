// const button = document.getElementById ('button');
// const modal = document.getElementById('modal');
// const portal = document.getElementById('portal');

// function button() {
//     // modal.style.display = 'none';
//     portal.style.display ='flex'
// }

document.getElementById("button").addEventListener("click", function () {
    document.getElementById("portal").style.display = "flex";
    document.getElementById("modal").style.display = " none"
});


const question = [
    {
        question: "what is the tallest mountain in the world?",
        answers: ["Paris"],
        score: 5
    },
    {
        question: "what does the I in ighub stands for'?",
        answers: ["Harper Lee"],
        score: 10
    },
    {
        question: "what food ingredient enhances taste ?",
        answers: ["Mars"],
        score: 5
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: ["Oxygen"],
        score: 9
    }
];

let currentQuestionIndex =