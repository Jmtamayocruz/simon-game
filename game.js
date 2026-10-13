const buttonColor = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let startGame = false;
let level = 0;

$(document).keydown(function(){
  if (!startGame) {
    startGame = true;
    $("#level-title").text("Level " + level);
    nextSequence();
  }
});

function checkAnswer(currentLevel) {
  if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if(userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over! Press Any Key to Restart");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    startGame = false;
    
  }
  startOver();
}

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  let randomNumber = Math.floor(Math.random()*buttonColor.length);
  let randomChosenColour = buttonColor[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn();
  playSound(randomChosenColour);
}

function playSound(name) {
  let sound = new Audio ("sounds/" + name + ".mp3");
  sound.play();
}




$(".btn").on("click", function handler(){
  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  playSound(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}




function startOver () {
  gamePattern = [];
  userClickedPattern = [];
  startGame = false;
  level = 0;
  $("#level-title").text("Level 0");
}
