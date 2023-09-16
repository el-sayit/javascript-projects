// Initialize Variables below
const date = new Date().toDateString();
const time = new Date().toLocaleTimeString();
let astronautCount = 7;
let astronautStatus = 'ready';
let averageAstronautMassKg = 80.7;
let crewMassKg =astronautCount * averageAstronautMassKg;
let fuelMassKg = 760.000;
let shuttleMassKg = 74842.31;
let totalMassKg= crewMassKg + fuelMassKg + shuttleMassKg;
let maxMassLimit = 850000;
let fuelTempCelcius = -225;
let minFuelTemp = -300;
let maxFuelTemp = -150;
let fuelLevel = '100%';
let weatherStatus ='clear';
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount >= 8 ) {
preparedForLiftOff =false;
} 
else if (astronautStatus !== 'ready') {
    preparedForLiftOff = false;
} 
else if (totalMassKg > maxMassLimit) {
    preparedForLiftOff = false;
}
// add logic below to verify all astronauts are ready

// add logic below to verify the total mass does not exceed the maximum limit of 850000

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
else if (fuelTempCelcius < minFuelTemp || fuelTempCelcius > maxFuelTemp ) {
    preparedForLiftOff = false;
} 
// add logic below to verify the fuel level is at 100%
else if (fuelLevel !== "100%") {
    preparedForLiftOff = false;
}
// add logic below to verify the weather status is clear
else if ( weatherStatus !== 'clear') {
    preparedForLiftOff = false;
}
if (preparedForLiftOff){

 (console.log('All systeams are a go! Initiaating space shuttle luach sequence \n---------------------'));
console.log(`Date: ${date}`);
console.log(`Time: ${time}`);
console.log(`Astronaut Count ${astronautCount}`);
console.log(`Crew Mass:  ${crewMassKg}`);
console.log(`Fuel Mass:  ${fuelMassKg}`);
console.log(`Shuttle Mass: ${shuttleMassKg}`);
console.log(`Total Mass:  ${totalMassKg}`);
console.log(`Fuel Temp:   ${fuelTempCelcius}`);
console.log(`Weather status:  ${weatherStatus}`);
console.log('------------------------------')
console.log('Have a safe trip astronauts!');
}
else (console.log('Abort the mission'));



// Verify shuttle launch can proceed based on above conditions
