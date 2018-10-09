# AVProg

https://colepfeiffer.github.io/AVProg/

__Gain__
* Lautstärke, dB
* `var gain = context.createGain();
   gain.gain.value = gainValue;`

__Delay__
* Verzögerung, Sekunden
* `var delay = context.createDelay();
   delay.delayTime.value = delayValue;`

__Panning__
* Stereosteuerung, L/R
* `var stereoPanner = context.createStereoPanner();
   stereoPanner.pan.value = panValue;`

__Convolver__

* Faltung (siehe Wikipedia), wird für Hall verwendet

__Connecten__

`source.connect(gain);
gain.connect(delay);
delay.connect(stereoPanner);
stereoPanner.connect(context.destination);`
