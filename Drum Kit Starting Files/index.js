

//this below upto green comment , is about button click sound making
for(var i =0;i<document.querySelectorAll("button").length;i++)
{
    var wButton = document.querySelectorAll("button")[i];

    function handelClick(){
      
       var buttonInnerHTML = this.innerHTML;

      makeSound(buttonInnerHTML)
      addAnimation(buttonInnerHTML)
     
    }
    wButton.addEventListener('click', handelClick)
}

//From this below key press incorporated
function keyChain(event){
    makeSound(event.key)
    addAnimation(event.key)
 }
     
    document.addEventListener('keydown',keyChain)
    
 function makeSound(key){
    switch(key)
    {
     case 'w':
        
         var tom4 = new Audio('sounds/tom-4.mp3');
         tom4.play();
         

         case 'a':
             var tom2 = new Audio('sounds/tom-2.mp3');
             tom2.play();
             break;

             case 's':
                 var tom3 = new Audio('sounds/tom-3.mp3');
                 tom3.play();
                 break;

                 case 'd':
                     var crash = new Audio('sounds/crash.mp3');
                     crash.play();
                     break;

                     case 'j':
                         var tom1 = new Audio('sounds/tom-1.mp3');
                         tom1.play();
                         break;

                         case 'k':
                             var kick = new Audio('sounds/kick-bass.mp3');
                             kick.play();
                             break;

                             case 'l':
                                 var snare = new Audio('sounds/snare.mp3');
                                 snare.play();
                                 break;
                                 default: console.log(buttonInnerHTML);
    }
    
    
 }
 function addAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
      activeButton.classList.add("pressed");

      setTimeout(function() {
        activeButton.classList.remove("pressed");
      },100);
 }

