const name = "Aryan-Saini"
const repoCount =   3

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('aryan saini')

console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName.__proto__);


console.log();
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf("y"));

const newString = gameName.substring(0, 4)
console.log(newString);


const AS = gameName.slice(-8, 4)
console.log(AS);

const newStringOne = "    aryan    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://aryan.com/aryan%20saini"

console.log(url.replace('%20','-'));

console.log(url.includes("aryan"));

console.log(url.includes("vivaan"));


console.log(gameName.split('-'));


