// Questions will be asked
const Questions = [{
    id: 0,
    q: "Quel est l'autre nom du SIDA ?",
    a: [{ text: "VHI", isCorrect: false },
        { text: "VIH", isCorrect: true },
        { text: "HIV", isCorrect: false },
        { text: "PNL", isCorrect: false }
    ]

},
{
    id: 1,
    q: "Parmi cette liste, lequel n'est pas un moyen d'attraper le SIDA ?",
    a: [{ text: "Pratiquer le sexe sans préservatif", isCorrect: false},
        { text: "Échange de seringue", isCorrect: false },
        { text: "Instrument mal stérilisé", isCorrect: false },
        { text: "Check de l'épaule", isCorrect: true }
    ]

},
{
    id: 2,
    q: "Quel est le premier symptôme à apparaître ?",
    a: [{ text: "Un état grippal", isCorrect: true },
        { text: "Fièvre", isCorrect: false },
        { text: "Toux", isCorrect: false },
        { text: "Nez bouché", isCorrect: false }
    ]

    
},
{
    id: 3,
    q: "Quels sont, à ce jour, les meilleurs traitements ?",
    a: [{ text: "Écouter un album de Wejdene", isCorrect: false },
        { text: "Il n'y a pas de traitement efficace", isCorrect: true },
        { text: "Un Doliprane", isCorrect: false },
        { text: "Prise de médicaments renforçant l'immunité", isCorrect: false }
    ]

},
{
    id: 4,
    q: "Quel est le type de transmission ?",
    a: [{ text: "Indirect", isCorrect: false, isSelected: false },
        { text: "Direct", isCorrect: true },
        { text: "Implicite", isCorrect: false, isSelected: false },
        { text: "Explicite", isCorrect: false, isSelected: false },
    ]

},
{
    id: 5,
    q: "Parmi ces stars, laquelle est morte du VIH ?",
    a: [{ text: "Kurt Kobain", isCorrect: false },
        { text: "Kobe Bryant", isCorrect: false },
        { text: "Freddie Mercury", isCorrect: true },
        { text: "Claude François", isCorrect: false }
    ]

},
{
    id: 6,
    q: "Quelles sont les conséquences du VIH ?",
    a: [{ text: "Une apparition de plaques rouges", isCorrect: false },
        { text: "Des problèmes cardiaques", isCorrect: false },
        { text: "Un très fort affaiblissement du système immunitaire", isCorrect: true },
        { text: "Une baisse du QI", isCorrect: false }
    ]

},
{
    id: 7,
    q: "Quelle est la différence entre le SIDA et le VIH ?",
    a: [{ text: "C'est pas les mêmes lettres", isCorrect: false },
        { text: "On a d'abord le VIH puis le SIDA se déclare", isCorrect: true },
        { text: "On a d'abord le SIDA puis le VIH se déclare", isCorrect: false },
        { text: "Ce sont deux maladies différentes", isCorrect: false }
    ]

},

]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text 
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "Vrai";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "Faux";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 7) {
    id++;
    iterate(id);
    console.log(id);
}

})