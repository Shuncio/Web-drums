    // Detecting mouse clicks on the drum buttons via the for loop
const totalAmountOfSoundableButtons = document.querySelectorAll(".drum-button").length;

for(i = 0; i < totalAmountOfSoundableButtons; i++) {

        // depending on pressed button, loop is assigning different number to it and immediately runs the function code below
    document.querySelectorAll(".drum-button")[i].addEventListener("click", function(event) {
        let actuallyClickedButton = this.innerHTML;

            // calling the function that outputs the proper sound; giving the input to it of the exact char assigned to the actually clicked drum button
        makeProperSound(actuallyClickedButton);
    
            // calling the function that plays the animation after mouse click; giving it the input of the exact char assigned to the actually clicked drum button
        drumButtonAnimation(actuallyClickedButton);
    });

}

    // Detecting keyboard clicks on the drum buttons
document.addEventListener("keydown", function(event) {
        
        // calling the function that gives off the sounds; giving the input to it of actually pressed keyboard key
    makeProperSound(event.key); 

        // calling the function that plays the animation after keyboard key press; giving the input to it of actually pressed keyboard key
    drumButtonAnimation(event.key);
});


    // Downloading the given chars from 'click' and 'keydown' events
function makeProperSound(key) {

        // selecting the exact case based on the given char & giving giving off the proper sound
    switch (key) {
        case "q": 
            let tom1Sound = new Audio("sounds/tom-1.mp3");
            tom1Sound.play();
        break;

        case "w":
            let tom2Sound = new Audio("sounds/tom-2.mp3");
            tom2Sound.play();
        break;

        case "e":
            let tom3Sound = new Audio("sounds/tom-3.mp3");
            tom3Sound.play();
        break;

        case "r":
            let tom4Sound = new Audio("sounds/tom-4.mp3");
            tom4Sound.play();
        break;

        case "t":
            let snareSound = new Audio("sounds/snare.mp3");
            snareSound.play();
        break;

        case "y":
            let crashSound = new Audio("sounds/crash.mp3");
            crashSound.play();
        break;

        case "u":
            let kickBassSound = new Audio("sounds/kick-bass.mp3");
            kickBassSound.play();
        break;

        default:
            console.log("You've pressed wrong button - please choose a button exposed on the screen");
        break;
    }

}

    // Drum button pressing animation
function drumButtonAnimation(currentKey) { // currentKey - a char that's assigned to the actually pressed drum button
    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100) // 0.1s of pressing animation's duration
}