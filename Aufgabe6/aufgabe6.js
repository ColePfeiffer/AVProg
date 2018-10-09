var context = new AudioContext();

// Steuerungsvariablen
var playStopButton = document.getElementById("playStopButton");
var isPlaying = false;

// Audio und Source
var sound = new Audio("sound.wav");
var source = context.createMediaElementSource(sound);

// Erstelle Gain, StereoPanner und Delay
var gain = context.createGain();
var stereoPanner = context.createStereoPanner();
var delay = context.createDelay();

sound.loop = true;

source.connect(gain);
gain.connect(delay);
delay.connect(stereoPanner);
stereoPanner.connect(context.destination);

document.getElementById("gainSlider").addEventListener("input", function(e){
    var gainValue = (this.value / 20);
    gain.gain.value = gainValue;
    document.getElementById("gainOutput").innerHTML = gainValue + " dB";
});

document.getElementById("panningSlider").addEventListener("input", function(e){
    var panValue = (this.value - 50) / 50;
    stereoPanner.pan.value = panValue;
    document.getElementById("panningOutput").innerHTML = gainValue + " LR";
});

document.getElementById("delaySlider").addEventListener("input", function(e){
    var delayValue = this.value / 25;
    delay.delayTime.value = delayValue;
    document.getElementById("delayOutput").innerHTML = gainValue + " sec";
});

playStopButton.addEventListener("click", function(e){
    if(isPlaying){
        sound.pause();
        playStopButton.innerHTML = "Play";
    }else{
        sound.play();
        playStopButton.innerHTML = "Pause";
    }

    isPlaying = !isPlaying;
});
