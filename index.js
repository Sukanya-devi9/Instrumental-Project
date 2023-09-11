var numberOfDrums=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrums;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
var buttonInnerHtml=this.innerHTML;
makeSound(buttonInnerHtml)});
}
function makeSound(key){

switch(key){ 
    case "w": var tom1Audio= new Audio("sounds/tom-1.mp3");
              tom1Audio.play();
              break;
   case "a": var tom2Audio= new Audio("sounds/tom-2.mp3");
              tom2Audio.play();
              break;
case "s": var tom3Audio= new Audio("sounds/tom-3.mp3");
              tom3Audio.play();
              break;
case "d": var tom4Audio= new Audio("sounds/tom-4.mp3");
              tom4Audio.play();
              break;
case "j": var tom5Audio= new Audio("sounds/snare.mp3");
              tom5Audio.play();
              break;
 case "k": var tom6Audio= new Audio("sounds/crash.mp3");
              tom6Audio.play();
              break;
case "l": var tom7Audio= new Audio("sounds/kick-bass.mp3");
              tom7Audio.play();
              break;
default: console.log(buttonInnerHtml);
}

}


document.addEventListener("keydown" ,function(event){
    makeSound(event.key);
});