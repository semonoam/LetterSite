document.body.style.backgroundImage = "url('https://cdn.glitch.global/af55d866-7230-4c11-b0c8-ace17ef210a3/background%20stage%204.png?v=1685306800454')";
document.body.style.backgroundSize = "contain";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.overflowX = 'hidden';
document.body.style.marginLeft = "0";
document.body.style.marginRight =  "0";
document.body.style.marginBottom = "0";
document.body.style.marginTop = "0";
document.body.style.height = '3720px';

const urlParams = new URLSearchParams(window.location.search);
const value = parseInt(urlParams.get('value'));
console.log('val', value);

var audio = new Audio('https://cdn.glitch.me/af55d866-7230-4c11-b0c8-ace17ef210a3/paskol.mp3?v=1685306814498');
audio.loop = true;
audio.currentTime = value;
audio.play();