// Create Web Audio API Context
var context = new AudioContext();
var oscillator = null;
var mouseDown = false;
var gainNode = context.createGain;

// Mouse Listener
document.body.addEventListener('mousemove', function(e){
	if(mouseDown){
		calculateFrequencyAndGain(e);
	}

});	  

// MouseDown starts the whole thing
document.body.addEventListener('mousedown', function(e){
	mouseDown = true;
	
	console.log("Start!");
	
	// create Oscillator
	oscillator = context.createOscillator();
	
	// connect oscillator to gain node to speakers			
	oscillator.connect(gainNode);
	gainNode.connect(context.destination);
	
	calculateFrequencyAndGain(e);
	
	// Start the oscillator
	oscillator.start(context.currentTime);
});

document.body.addEventListener('mouseup', function(e){
	mouseDown = false;
	
	console.log("Stop!");
	
	if(oscillator){
		// Stop and delete the oscillator
		oscillator.stop(context.currentTime);
		oscillator.disconnect();
	}
	
});

function calculateFrequencyAndGain(event){
	
	var maxFreq = 2000, minFreq = 20, maxGain = 1, minGain = 0;
	
	console.log("x = "+e.clientX + " y: "+e.clientY);
	
	// Set Stuff
	//oscillator.frequency.value = (e.clientX / window.innerWidth ) * maxFreq + minFreq;
	//gainNode.gain.value = (e.clientY / window.innerHeight ) * maxGain + minGain; 
	
	oscillator.frequency.setTargetAtTime((e.clientX / window.innerWidth ) * maxFreq + minFreq);
	gainNode.gain.setTargetAtTime((e.clientY / window.innerHeight ) * maxGain + minGain);
}