import * as Tone from 'tone';

const oscillator = new Tone.Oscillator({
  type: 'sine',
  frequency: 440,
}).toDestination();

oscillator.start();
