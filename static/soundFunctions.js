const buttonOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

var answerOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

var nextAnswer = 'A';
var options = ['A', 'B', 'C']
var option1 = 'A';
var option2 = 'B';
var option3 = 'C';

function reset() {
    answerIndex = Math.floor(Math.random() * answerOptions.length);
    nextAnswer = answerOptions.at(answerIndex);
    answerOptions.splice(answerIndex, 1);
    //alert(nextAnswer);
    options[0] = nextAnswer;
    options[1] = options[0];
    while (options[0] == options[1]) {
        buttonIndex2 = Math.floor(Math.random() * buttonOptions.length);
        options[1] = buttonOptions.at(buttonIndex2);
    }
    options[2] = options[0];
    while (options[2] == options[0] || options[2] == options[1]) {
        buttonIndex3 = Math.floor(Math.random() * buttonOptions.length);
        options[2] = buttonOptions.at(buttonIndex3);
    }
    //alert(options);
    index1 = Math.floor(Math.random() * options.length);
    option1 = options.at(index1);
    options.splice(index1, 1);
    index2 = Math.floor(Math.random() * options.length);
    option2 = options.at(index2);
    options.splice(index2, 1);
    index3 = Math.floor(Math.random() * options.length);
    option3 = options.at(index3);
    options.splice(index3, 1);

    //alert("option1:" + option1);
    //alert("option2:" + option2);
    //alert("option3:" + option3);

    const button1 = document.getElementById('button1');
    button1.style.backgroundColor = '#563f1b';
    button1.style.borderColor = '#493657';
    button1.innerHTML = option1;
    const button2 = document.getElementById('button2');
    button2.style.backgroundColor = '#563f1b';
    button2.style.borderColor = '#493657';
    button2.innerHTML = option2;
    const button3 = document.getElementById('button3');
    button3.style.backgroundColor = '#563f1b'
    button3.style.borderColor = '#493657';
    button3.innerHTML = option3;
}

function playName(element) {
    //alert(element.innerHTML);
    //alert(nextAnswer);
    var letterAudioFile = 'static/names/' + element.innerHTML + '.mp3';
    var letterSound = new Audio(letterAudioFile);
    letterSound.play();

    if (nextAnswer == element.innerHTML) {
        setTimeout(() => correctAnswer(element), 1000);
    }
    else {
        setTimeout(() => incorrectAnswer(element), 1000);
    }
}

function correctAnswer(chosenButton) {
    chosenButton.style.backgroundColor = 'green';
    chosenButton.style.borderColor = 'green';
    const pointsCounter = document.getElementById('points');
    pointsCounter.innerHTML = Number(pointsCounter.innerHTML) + 1;
    setTimeout(reset, 1500);
}

function incorrectAnswer(chosenButton) {
    chosenButton.style.backgroundColor = 'red';
    chosenButton.style.borderColor = 'red';
    const pointsCounter = document.getElementById('points');
    pointsCounter.innerHTML = Number(pointsCounter.innerHTML) - 1;
}

function playSound() {
    var letterAudioFile = 'static/sounds/alphasounds-' + nextAnswer + '.mp3';
    var letterSound = new Audio(letterAudioFile);
    letterSound.play();
}

function playInstructions() {
    var audioFile = 'static/instructions.mp3';
    var sound = new Audio(audioFile);
    sound.play();
}
