

var btnW = document.querySelectorAll(".drum-button")[0]
var btnA = document.querySelectorAll(".drum-button")[1]
var btnS = document.querySelectorAll(".drum-button")[2]
var btnD = document.querySelectorAll(".drum-button")[3]
var btnJ = document.querySelectorAll(".drum-button")[4]
var btnK = document.querySelectorAll(".drum-button")[5]
var btnL = document.querySelectorAll(".drum-button")[6]



for(var i = 0; i < document.querySelectorAll(".drum-button").length; i++){
    document.querySelectorAll(".drum-button")[i].addEventListener('click', function() {

            let key = this.textContent.toLowerCase();
            
            
            switch(key){
                case "w":
                    new Audio('sounds/tom-1.mp3').play();
                    break;
                case "a":
                    new Audio('sounds/tom-2.mp3').play();
                    break;
                case "s":
                    new Audio('sounds/tom-3.mp3').play();
                    break;
                case "d":
                    new Audio('sounds/tom-4.mp3').play();
                    break;
                case "j":
                    new Audio('sounds/snare.mp3').play();
                    break;
                case "k":
                    new Audio('sounds/crash.mp3').play();
                    break;
                case "l":
                    new Audio('sounds/kick-bass.mp3').play();
                    break;
            }
        
    });
}


document.addEventListener('keydown', (e) => {
    let key = e.key.toLowerCase();

    switch(key){
        case "w":
            btnW.style.background = "red";
            btnW.style.color = "white";
            new Audio('sounds/tom-1.mp3').play();
            break;
        case "a":
            btnA.style.background = "red";
            btnA.style.color = "white";
            new Audio('sounds/tom-2.mp3').play();
            break;
        case "s":
            btnS.style.background = "red";
            btnS.style.color = "white";
            new Audio('sounds/tom-3.mp3').play();
            break;
        case "d":
            btnD.style.background = "red";
            btnD.style.color = "white";
            new Audio('sounds/tom-4.mp3').play();
            break;
        case "j":
            btnJ.style.background = "red";
            btnJ.style.color = "white";
            new Audio('sounds/snare.mp3').play();
            break;
        case "k":
            btnK.style.background = "red";
            btnK.style.color = "white";
            new Audio('sounds/crash.mp3').play();
            break;
        case "l":
            btnL.style.background = "red";
            btnL.style.color = "white";
            new Audio('sounds/kick-bass.mp3').play();
            break;
    }
});


    document.addEventListener('keyup', (e) => {
        var key = e.key.toLowerCase();
    
        switch(key){
            case "w":
                btnW.style.background = "";
                btnW.style.color = "";
                break;
            case "a":
                btnA.style.background = "";
                btnA.style.color = "";
                break;
            case "s":
                btnS.style.background = "";
                btnS.style.color = "";
                break;
            case "d":
                btnD.style.background = "";
                btnD.style.color = "";
                break;
            case "j":
                btnJ.style.background = "";
                btnJ.style.color = "";
                break;
            case "k":
                btnK.style.background = "";
                btnK.style.color = "";
                break;
            case "l":
                btnL.style.background = "";
                btnL.style.color = "";
                break;
        }
    });


