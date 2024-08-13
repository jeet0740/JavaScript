const name = "jeet"
const num = 20

console.log(name+num+"value");

//new method for string

console.log(`hello my name is ${name} and my roll no is ${num}`);

const anothername = new String('jeet')
console.log(typeof anothername);
console.log(anothername);
console.log(anothername.toUpperCase());
//charAt , indexOf , toUpperCase and lower 

console.log(name.substring(0,2));
console.log(name.slice(0,2));
console.log(name.trim());
console.log(name.replace('et','el'));
console.log(name.includes('et'));
//if value not found in string 
//,output returns false otherwise true.