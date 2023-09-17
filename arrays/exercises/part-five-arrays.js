let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split(' ')); //splits each words as an element of array
console.log(str.split('e')); //given argument will be omitted and it will be spliting point
console.log(str.split('')); //splits each letter as an element of array
console.log(str.split()); // splits original string into one element
//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(arr.join("a"));
console.log(arr.join());
//3) Do split or join change the original string/array?
console.log(str); //split() does not change original string
console.log(arr); //join() method doesnot change original method
//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
let newArr = cargoHold.split(',');
console.log(newArr.sort());
console.log(newArr.join(str));
