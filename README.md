# AVProg

https://colepfeiffer.github.io/AVProg/

__Gain__
* Lautstärke, dB
* `var gain = context.createGain();`

__Delay__
* Verzögerung, Sekunden
* `var delay = context.createDelay();`

__Panning__
* Stereosteuerung, L/R
* `var stereoPanner = context.createStereoPanner();`

__Convolver__

* Faltung (siehe Wikipedia), wird für Hall verwendet

__Connecten__

`source.connect(gain);
gain.connect(delay);
delay.connect(stereoPanner);
stereoPanner.connect(context.destination);`
