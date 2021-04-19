const buttonColors = ["red","blue","green","yellow"];
let gamePattern = [];
console.log(gamePattern);


function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);
    let randomChosenColor = buttonColors[randomNumber];
    console.log(randomChosenColor);
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    
    let audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();
}


