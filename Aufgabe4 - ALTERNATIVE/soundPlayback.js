var context = new AudioContext();

var drumpads = document.getElementsByClassName("drumpad"),
    soundBuffers = [];

for (let i = 0; i < drumpads.length; i++) {
	getData(i);
	
	drumpads[i].addEventListener("mousedown", function (e) {playSound(i)});
}

function getData(i){
	var request = new XMLHttpRequest();
	
	// Befehl, Pfad, asynchron (wird im Hintergrund ausgeführt)
	request.open("GET", "sounds/sound"+(i+1+".wav"), true); 
	request.responseType = "arraybuffer";
	request.onLoad(function(){
		var undecodedAudio = request.response;
		context.decodeAudioData(undecodedAudio, function(buffer){
			soundBuffers[i] = buffer;
		});
		
	});
	
	request.send();
}

function playSound(i) {
	var sourceBuffer = context.createBufferSource();
	sourceBuffer.buffer = soundBuffers[i];
	sourceBuffer.connect(context.destination);
    soundBuffer.start(0);
}
