// button colors 
const buttonColors = ["red","blue","green","yellow"];
// keep track of the game's color pattern
let gamePattern = [];

// console.log(gamePattern);

// keep track of the user's input
let userGamePattern = [];

// console.log(userGamePattern);

// keep track of the beginning state of the game
let started = false;

// starting game level
let level = 0;

// keypress event listener to start the game
$(document).keypress(function(event){
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

// keep track of the user's click of the buttons
// added animation and sound effects
// check if user's answer is correct
$(".btn").click(function(){
    let userChosenColor = $(this).attr("id");
    console.log(userChosenColor);
    userGamePattern.push(userChosenColor);
    // console.log(userGamePattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userGamePattern.length-1)
});

// function to run the randomize sequence of colors 
function nextSequence() {
    userGamePattern = [];

    // increase the level
    level++;
    // updated the h1 to what level the user is on
    $("#level-title").text("Level " + level);

    // get random number 
    let randomNumber = Math.floor(Math.random() * 4);
    // console.log(randomNumber);

    // set random color based on the random number by indexing in the buttonColors
    let randomChosenColor = buttonColors[randomNumber];
    // console.log(randomChosenColor);

    // add to gamePattern list
    gamePattern.push(randomChosenColor);

    // add animation to the buttons
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    
    // play the corresponding sound effect
    playSound(randomChosenColor);

}

// play sounds
function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
    
}

// pressed animation
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

// check user's answers
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
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

// reset variables back to the beginning state
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}
