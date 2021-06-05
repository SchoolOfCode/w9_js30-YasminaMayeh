const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const current = new Date();
     
    const seconds = current.getSeconds();
    const secondDegrees = ((seconds/ 60)*360) + 90;
}
