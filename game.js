var gamePattern=[];
var buttonColors=["red","blue","green","yellow"];
var userClickedPattern=[];
$(document).keypress(function(){
    nextSequence();
})

$(".btn").click(function(){
    var userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
})

function playSound(name){
    var audio = new Audio('./sounds/'+name+'.mp3');
    audio.play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100); 
}
var level=-1;
function nextSequence(){
    userClickedPattern=[];
    level++;
    $("h1").text("Level "+level);
    var randomNumber=Math.random();
    randomNumber=randomNumber*4;
    randomNumber=Math.floor(randomNumber);
    var randomChosenColor=buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    var x="#"+randomChosenColor;
    $(x).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        if(userClickedPattern.length===gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver(){
        level=-1;
        gamePattern=[];
        userClickedPattern=[];
}

