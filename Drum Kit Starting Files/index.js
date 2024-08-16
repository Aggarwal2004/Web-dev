
for(var i=0;i<document.querySelectorAll(".drum ").length;i++){
    document.querySelectorAll(".drum ")[i].addEventListener("click",handleclick);
}
// document.querySelector(".w").addEventListener("click",handleclick);
function handleclick(){
    var x=this.innerHTML;
    makesound(x);
    buttonAnimation(x);
}

document.addEventListener("keydown",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
})

function  makesound(key){
    switch(key){
        case "w":
            var n=new Audio('./sounds/tom-4.mp3');
            n.play();
        break;

        case "a":
            var n=new Audio('./sounds/kick-bass.mp3');
            n.play();
        break;
        case "s":
            var n=new Audio('./sounds/tom-1.mp3');
            n.play();
        break;
        case "d":
            var n=new Audio('./sounds/snare.mp3');
            n.play();
        break;
        case "j":
            var n=new Audio('./sounds/tom-2.mp3');
            n.play();
        break;
        case "k":
            var n=new Audio('./sounds/crash.mp3');
            n.play();
        break;
        case "l":
            var n=new Audio('./sounds/tom-3.mp3');
            n.play();
        break;
    }
}

function buttonAnimation(cuurentKey){
    var active=document.querySelector("."+cuurentKey);
    active.classList.add("pressed");
    // active.classList.remove("pressed");
    setTimeout(function(){
        active.classList.remove("pressed");
    },100);
}


