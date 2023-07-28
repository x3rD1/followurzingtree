const button = document.querySelector('.atwci');
const atwci = document.querySelector('audio[data-key="atwci"]');

button.addEventListener('click', () => {
    atwci.play();
})