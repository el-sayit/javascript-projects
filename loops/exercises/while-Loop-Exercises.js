//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let fuelLevel;
let astronautsAboard;
let altitude =0;
const input =require('readline-sync');



/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
fuelLevel =input.question('Please enter a value between 5000 to 30000.. ');
fuelLevel =Number(fuelLevel);
while (fuelLevel < 5000 || fuelLevel >30000 ) {
  fuelLevel = input.question('Please enter starting fuel level.. ');
  fuelLevel = Number(fuelLevel);
}
console.log(fuelLevel);




//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
astronautsAboard = input.question('Please enter number of astronauts aboard(Max 7).. '); 
astronautsAboard = Number(astronautsAboard); 
while (astronautsAboard <= 0 || astronautsAboard >7) {
    astronautsAboard =input.question('Please enter a valid number... ');
    astronautsAboard = Number(astronautsAboard);
  }
  console.log(astronautsAboard, typeof astronautsAboard);

  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
const fuelLevelUnit =100;
const altitudeUnit =50;
while (fuelLevel > (astronautsAboard*fuelLevelUnit)) {
  fuelLevel = fuelLevel -(astronautsAboard *fuelLevelUnit); 
  altitude = altitude + altitudeUnit;
  if (fuelLevel ===0) {
    break;
  }
}
console.log(typeof altitude, altitude);
console.log(typeof fuelLevel, fuelLevel);


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
console.log(`The shuttle gained an altitude of ${altitude} km!`);
if (altitude >= 2000) {
  console.log("orbit achieved")
  } else console.log('Failed to reach orbit');