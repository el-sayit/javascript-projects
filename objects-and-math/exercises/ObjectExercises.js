let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};
let superChimpTwo = {
   name: 'Brad',
   species: 'Chimpanzee',
   mass: 11,
   age: 6
};
let beagle = {
   name: 'Leroy',
   species: 'Beagle',
   mass: 14,
   age: 5
};
let tardigrade = {
   name: 'Almina',
   species: 'Tardigrade',
   mass: 0.0000000001,
   age: 1
};


// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!
// function addID(member) {
//    member['astronautID'] = Math.round(Math.random() *10);
//    if (member['astronautID'] ===member['astronautID']) {
//       member['astronautID'] =Math.round(Math.random() *10);
//    }
//    return member['astronautID'];
// }
// addID(superChimpOne);
// addID(superChimpTwo);
// addID(salamander);
// addID(beagle);
// addID(tardigrade);

superChimpOne['astronautID'] =(Math.random() *10);
superChimpTwo['astronautID'] =(Math.random() *10);
salamander['astronautID'] =(Math.random() *10);
beagle['astronautID'] =(Math.random() *10);
tardigrade['astronautID'] =(Math.random() *10);

superChimpOne['move'] = function takeSteps(){
   return Math.floor(Math.random() *10);
      };
superChimpTwo['move'] = function takeSteps(){
   return Math.floor(Math.random() *10);
      };
salamander['move'] = function takeSteps(){
   return Math.floor(Math.random() *10);
      };
beagle['move'] = function takeSteps(){
   return Math.floor(Math.random() *10);
      };
tardigrade['move'] = function takeSteps(){
   return Math.floor(Math.random() *10);
      };

let crew = [superChimpOne, superChimpTwo, salamander, beagle, tardigrade];

console.log(superChimpOne);
console.log(superChimpTwo);
console.log(salamander);
console.log(beagle);
console.log(tardigrade);
function crewReports(animal){
   console.log(`${animal.name} is ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}`);
} ;
crewReports(beagle);
function fitnessTest(arr) {
   let results =[];
   let stepsTaken =0;
   let turns = 0;
   for (i = 0; i <arr.length; i++) {
      stepsTaken=0;
      turns = 0;
      while (stepsTaken < 20) {
         stepsTaken= stepsTaken + arr[i].move();
         turns++;
      }
      results.push(`${arr[i].name} took ${turns} to reach 20 steps`);
   }
   return results;
};
console.log(fitnessTest(crew));
