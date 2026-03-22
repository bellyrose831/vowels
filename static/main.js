function playVowels() {
    var vowelsSound = new Audio('static/vowels.mp3')
    vowelsSound.play()
}


function playASound() {
    var ASound = new Audio('static/A.mp3')
    ASound.play()
    setTimeout(changeAButton, 1750);
}

function changeAButton() {
    const AButton = document.getElementById('a_button');
    if (AButton.innerHTML == 'A') {
        AButton.style.backgroundColor = "black";
        AButton.style.boxShadow = "10px 10px rgb(51 51 51)";
        AButton.style.color = "white";
        AButton.innerHTML = '1';
    }
    else {
        AButton.style.backgroundColor = "white";
        AButton.style.boxShadow = "10px 10px black";
        AButton.style.color = "black";
        AButton.innerHTML = 'A';
    }
}

function playESound() {
    var ESound = new Audio('static/E.mp3')
    ESound.play()
    setTimeout(changeEButton, 1750);
}

function changeEButton() {
    const EButton = document.getElementById('e_button')
    if (EButton.innerHTML == 'E') {
        EButton.style.backgroundColor = "black";
        EButton.style.boxShadow = "10px 10px rgb(51 51 51)";
        EButton.style.color = "white";
        EButton.innerHTML = '2';
    }
    else {
        EButton.style.backgroundColor = "white";
        EButton.style.boxShadow = "10px 10px black";
        EButton.style.color = "black";
        EButton.innerHTML = 'E';
    }
}

function playISound() {
    var ISound = new Audio('static/I.mp3')
    ISound.play()
    setTimeout(changeIButton, 1750);
}

function changeIButton() {
    const IButton = document.getElementById('i_button')
    if (IButton.innerHTML == 'I') {
        IButton.style.backgroundColor = "black";
        IButton.style.boxShadow = "10px 10px rgb(51 51 51)";
        IButton.style.color = "white";
        IButton.innerHTML = '3';
    }
    else {
        IButton.style.backgroundColor = "white";
        IButton.style.boxShadow = "10px 10px black";
        IButton.style.color = "black";
        IButton.innerHTML = 'I';
    }
}

function playOSound() {
    var OSound = new Audio('static/O.mp3')
    OSound.play()
    setTimeout(changeOButton, 1750);
}

function changeOButton() {
    const OButton = document.getElementById('o_button')
    if (OButton.innerHTML == 'O') {
        OButton.style.backgroundColor = "black";
        OButton.style.boxShadow = "10px 10px rgb(51 51 51)";
        OButton.style.color = "white";
        OButton.innerHTML = '4';
    }
    else {
        OButton.style.backgroundColor = "white";
        OButton.style.boxShadow = "10px 10px black";
        OButton.style.color = "black";
        OButton.innerHTML = 'O';
    }
}

function playUSound() {
    var USound = new Audio('static/U.mp3')
    USound.play()
    setTimeout(changeUButton, 1750);
}

function changeUButton() {
    const UButton = document.getElementById('u_button')
    if (UButton.innerHTML == 'U') {
        UButton.style.backgroundColor = "black";
        UButton.style.boxShadow = "10px 10px rgb(51 51 51)";
        UButton.style.color = "white";
        UButton.innerHTML = '5';
    }
    else {
        UButton.style.backgroundColor = "white";
        UButton.style.boxShadow = "10px 10px black";
        UButton.style.color = "black";
        UButton.innerHTML = 'U';
    }
}

function playYSound() {
    var YSound = new Audio('static/Y.mp3')
    YSound.play()
    setTimeout(changeYButton, 1750);
}

function changeYButton() {
    const YButton = document.getElementById('y_button')
    if (YButton.innerHTML == 'Y') {
        YButton.style.backgroundColor = "black";
        YButton.style.boxShadow = "10px 10px rgb(51 51 51)";
        YButton.style.color = "white";
        YButton.innerHTML = '6';
    }
    else {
        YButton.style.backgroundColor = "white";
        YButton.style.boxShadow = "10px 10px black";
        YButton.style.color = "black";
        YButton.innerHTML = 'Y';
    }
}