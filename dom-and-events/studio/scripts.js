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
    // shuttleBackground.style.position = 'absolute';
    rocket.style.position = 'relative';
    rocket.style.top ='10px'
    
})
upButton.addEventListener('click', () => {
rocket.style.position='relative'
    rocket.style.bottom='10px'
})
});