const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


// plan
//  step 1 move clock hand (secs) after one sec
// repeat step 1 for 59 secs
// after 60 seconds move 
// move minute hand 
// select the second hand in dom = secondsHand
// create function 

function setDate(){
    const current = new Date();
     
    const seconds = current.getSeconds();
    const secondDegrees = ((seconds/ 60)*360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = current.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setDate, 1000);

  setDate();
