// Declare and assign the variables below
let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;
const milesPerKm = 0.621;
const hoursInDay = 24;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(shuttleName, typeof shuttleName);
console.log(shuttleSpeedMph, typeof shuttleSpeedMph);
console.log(distanceToMarsKm, typeof distanceToMarsKm);
console.log(distanceToMoonKm, typeof distanceToMoonKm);
console.log(milesPerKm, typeof milesPerKm);
console.log(hoursInDay, typeof hoursInDay);
// Calculate a space mission below
let milesToMars = distanceToMarsKm * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = Math.trunc(hoursToMars / hoursInDay);
// Print the results of the space mission calculations below
console.log(`${shuttleName} will take ${daysToMars} days to reach Mars!`)
// Calculate a trip to the moon below
let milesToMoon = distanceToMoonKm * milesPerKm;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = (hoursToMoon / hoursInDay);
 // Print the results of the trip to the moon below
 console.log(`${shuttleName} will take ${daysToMoon} days to reach the Moon!`)