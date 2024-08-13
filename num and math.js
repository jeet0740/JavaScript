const score = 100
console.log(score)

const balance = new Number(1000)
console.log(balance)

console.log(balance.toString())
console.log(balance.toFixed(3))//ans 1000.000 (3=value after decimal point)

const num = 123.8966
console.log(num.toPrecision(2))
console.log(num.toPrecision(3))
console.log(num.toPrecision(4))

const newnum = 1000000
console.log(newnum.toLocaleString());
console.log(newnum.toLocaleString('en-IN'));//indian number system

//math functions

console.log(Math.abs(-4));
console.log(Math.round(5.5));
console.log(Math.ceil(5.1));
console.log(Math.floor(5.9));
console.log(Math.sqrt(25));
console.log(Math.random()*10);

const min = 1;
const max = 6;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
