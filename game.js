const buttonColors = ["red","blue","green","yellow"];
let gamePattern = [];
// console.log(gamePattern);
let userGamePattern = [];
// console.log(userGamePattern);

$(".btn").click(function(){
    let userChosenColor = $(this).attr("id");
    console.log(userChosenColor);
    userGamePattern.push(userChosenColor);
    // console.log(userGamePattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);
});

function nextSequence() {
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




