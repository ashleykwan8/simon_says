const buttonColors = ["red","blue","green","yellow"];
let gamePattern = [];
// console.log(gamePattern);
let userGamePattern = [];
// console.log(userGamePattern);
let started = false;
let level = 0;

$(document).keypress(function(event){
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function(){
    let userChosenColor = $(this).attr("id");
    console.log(userChosenColor);
    userGamePattern.push(userChosenColor);
    // console.log(userGamePattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userGamePattern.length-1)
});


function nextSequence() {
    userGamePattern = [];

    level++;
    $("#level-title").text("Level " + level);

    let randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);
    let randomChosenColor = buttonColors[randomNumber];
    console.log(randomChosenColor);
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColor);

}

function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
    
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    if (userGamePattern[currentLevel] == gamePattern[currentLevel]){
        console.log("Success!");
        if(userGamePattern.length== gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
        
    } else {
        console.log("Wrong!");
    }
}


