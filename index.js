var drums = document.querySelectorAll(".drum").length;

for(i= 0 ; i < drums; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function()
    {
      
      var buttonHtml = this.innerHTML;
      sound(buttonHtml);
      animation(buttonHtml);
      
           
    });
}

document.addEventListener("keypress", function(event) {
      sound(event.key);
      animation(event.key);

});

function sound(key){
      switch(key){
            case 'w':
                 var tom_4= new Audio("sounds/tom-4.mp3");
                  tom_4.play();
            break; 
            case 'a':
                 var audio = new Audio("sounds/kick-bass.mp3");
                  audio.play();
            break;  
            case 's':
                 var audio = new Audio("sounds/tom-1.mp3");
                  audio.play();
            break;  
            case 'd':
                 var audio = new Audio("sounds/snare.mp3");
                  audio.play();
            break;  
            case 'j':
                 var audio = new Audio("sounds/tom-2.mp3");
                  audio.play();
            break;  
            case 'k':
                 var audio = new Audio("sounds/tom-3.mp3");
                  audio.play();
            break;  
            case 'l':
                 var audio = new Audio("sounds/crash.mp3");
                  audio.play();
            break; 
            default: 
              console.log(buttonHtml);
        }       

}

function animation(pressedKey) {
      var activeKey = document.querySelector("."+ pressedKey);

      activeKey.classList.add("pressed");

      setTimeout(function() {
            activeKey.classList.remove("pressed");
      }, 100);

}

