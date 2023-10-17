//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
addScore(score) {
    for(let i = 0; i< 9; i++)
    this.scores.push(score);
    return this.scores;
};
averege() {
    let sum = 0;
    for (let i = 0; i < this.scores.length; i++)
    sum = sum + this.scores[i];
return Math.round((sum/this.scores.length) *10)/10;
};
status() {
if (this.averege() > 90) 
    return "Accepted";
else if (this.averege() < 89 && this.averege() >80)
    return 'Reserve';
    else if (this.averege() <79 && this.averege() > 70)
return 'Probationary';

}

}

let candidateOne = new CrewCandidate('Bubba bear', 135 ,[88,85,90]);
let candidateTwo = new CrewCandidate("Merry Maltese", 1.5, [93,88,97]);
let candidateThree = new CrewCandidate('Glad Gator', 225,[75,78,62]);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
candidateOne.addScore(83);
candidateThree.addScore(83)
console.log(candidateOne.averege());
console.log(`${candidateOne.name} earned an average test score of ${candidateOne.averege()}% and has a status of ${candidateOne.status()}.'`)
console.log(`${candidateTwo.name} arned an average test score of ${candidateTwo.averege()}% and has a status of ${candidateTwo.status()}.'`)
console.log(`${candidateThree.name} arned an average test score of ${candidateThree.averege()}% and has a status of ${candidateThree.status()}.'`)
// console.log(candidateTwo.status());
// console.log(candidateThree.status());
//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
console.log(candidateThree.scores)

