//arrays
const arr = [0,1,2,3]
const ex = ["homelander","starlight"]
const arr2 = new Array(1,2,3,4)

//array methods

arr.push(6)
console.log(arr);
arr.pop()
console.log(arr);
arr.unshift(9)//adds element at starting
console.log(arr);
arr.shift()//removes element from starting
console.log(arr);

console.log(arr.includes(9));

const newarr = arr.join()
console.log(newarr);
console.log(arr);
