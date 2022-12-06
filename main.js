document.addEventListener("keydown", function(event){
    playsound(event.key);
    buttonAnimation(event.key);
})

function playsound(key){
    switch(key) {
        case "Q":
            var soundQ = new Audio(`sounds/kick.mp3`);
            soundQ.play();
        break;

        case "S":
            var soundS = new Audio(`sounds/snare.mp3`);
            soundS.play();
        break;

        case "D":
            var soundD = new Audio(`sounds/tom.mp3`);
            soundD.play();
        break;

        case "F":
            var soundF = new Audio(`sounds/floor.mp3`);
            soundF.play();
        break;

        case "G":
            var soundG = new Audio(`sounds/crash.mp3`);
            soundG.play();
        break;

        case "H":
            var soundH = new Audio(`sounds/ride.mp3`);
            soundH.play();
        break;

        case "J":
            var soundJ = new Audio(`sounds/splash.mp3`);
            soundJ.play();
        break;

        case "K":
            var soundK = new Audio(`sounds/open.mp3`);
            soundK.play();
        break;

        case "L":
            var soundL = new Audio(`sounds/close.mp3`);
            soundL.play();
        break;
    }
}

function buttonAnimation(key){
    document.querySelector("."+key).classList.add("pressed");

    setTimeout(() => {
        document.querySelector("."+key).classList.remove("pressed");
    }, 100);
}