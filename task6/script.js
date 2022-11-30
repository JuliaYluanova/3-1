const trafficLightEl = document.querySelector('#trafficLight1');
const trafficLightE2 = document.querySelector('#trafficLight2');
const trafficLightE3 = document.querySelector('#trafficLight3');


trafficLightEl.addEventListener('click', makeGreen);
trafficLightE2.addEventListener('click', makeYellow);
trafficLightE3.addEventListener('click', makeRed);

function makeGreen() {
    trafficLightEl.style.background = ('green');
    if (trafficLightEl) {
        trafficLightEl.addEventListener('click', makeGreen);
        trafficLightE2.style.background = ('black');
        trafficLightE3.style.background = ('black');
    } 
}

function makeYellow() {
    trafficLightE2.style.background = ('yellow');  
    if (trafficLightE2) {
        trafficLightE2.addEventListener('click', makeYellow);
        trafficLightEl.style.background = ('black');
        trafficLightE3.style.background = ('black');
    } 
}

function makeRed() {
    trafficLightE3.style.background = ('red');   
    if (trafficLightE3) {
    trafficLightE3.addEventListener('click', makeRed);
    trafficLightEl.style.background = ('black');
    trafficLightE2.style.background = ('black');  
    } 
}

