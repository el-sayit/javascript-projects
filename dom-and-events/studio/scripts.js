// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function(){
    console.log('windows loaded')

const takeOffButton = document.getElementById('takeoff');
const flightStatus = document.getElementById('flightStatus');
const shuttleBackground =document.getElementById('shuttleBackground');
const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
const landButton = document.getElementById('landing');
const missionAbortButton = document.getElementById('missionAbort');
const upButton = document.getElementById('up');
const downButton = document.getElementById('down');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');
const rocket = document.getElementById('rocket');
let downPosition =10;
let upPosition =10;
let leftPosition =10;
let rightPosition = 10;



takeOffButton.addEventListener('click', function(){
    let response = confirm('Confirm that the shuttle is ready for takeoff.')
    if (response) {
    flightStatus.innerHTML = "Shuttle in flight."
    shuttleBackground.style.backgroundColor = 'blue'
    spaceShuttleHeight.innerHTML = '10,000'
    }

});
landButton.addEventListener('click', function(){
    alert('The shuttle is landing. Landing gear engaged.')
    flightStatus.innerHTML = 'The shuttle has landed.'
    shuttleBackground.style.backgroundColor = 'green'
    spaceShuttleHeight.innerHTML = '0'
});
missionAbortButton.addEventListener('click', function(){
    let response = window.confirm('Confirm that you want to abort the mission.');
    if(response) {
        flightStatus.innerHTML = 'Mission aborted.'
        shuttleBackground.style.backgroundColor = 'green'
        spaceShuttleHeight.innerHTML = '0'
    }
});
downButton.addEventListener('click', function(){
    
    rocket.style.position = 'relative';
    downPosition +=10;
    rocket.style.top =`${downPosition}px`
    
});
upButton.addEventListener('click', () => {
rocket.style.position='relative'
upPosition +=10;
    rocket.style.bottom=`${upPosition}px`
})
leftButton.addEventListener('click', function(){
    
    
    rocket.style.position = 'relative';
    rightPosition +=10;
    rocket.style.right =`${rightPosition}px`
})
rightButton.addEventListener('click', function(){
    
    
    rocket.style.position = 'relative';
   leftPosition +=10;
    rocket.style.left =`${leftPosition}px`
})
});