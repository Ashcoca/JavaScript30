// Goals - We need to link up the audio with the div class and add an event listener that triggers on keypress
// Goals - We also need to add a class on keypress (playing) and remove it

playSound = (e) => { 
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // select .key class with current keyCode
    
  if (!audio) {
    return; // if there's no audio file attached (i.e. a random key is pressed) then we stop executing
  } else {
    key.classList.add("playing");
    audio.currentTime = 0; // rewinds currently playing audio clip if keys pressed in quick succession
    audio.play();
  }
};

removeTransition = (e) => {
  if (e.propertyName !== 'transform') { // no need to check every transition
    return;
  } else {
    e.target.classList.remove('playing');
    //this.classList.remove('playing') // another way to do this
  }
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // adding event listener to each dom node

window.addEventListener('keydown', playSound);