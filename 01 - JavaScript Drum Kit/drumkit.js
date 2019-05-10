function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // Stop function from running
    if (!audio) return;
    // Resets audio
    audio.currentTime = 0;
    audio.play();
    // Calling CSS class
    // key.addClass('playing'); // This is jQuery 
    key.classList.add('playing'); // This is JS
}

function removeTransition(e) {
    // Skips if it is not a transform property
    if (e.propertyName !== 'transform') return;
    // Removes playing property after given attribute is met
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);