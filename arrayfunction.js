//concat two array
marvel = ['ironman','spiderman','thor']
dc = ['batman','superman','flash']

heros = marvel.concat(dc)
console.log(heros);

//spred array(combines two array)

allheros = [...marvel,...dc]
console.log(allheros);

//flat method
const arr = [1,2,3,[4,5,[6,7]],8,9]
const another_arr = arr.flat(1)
const a_arr = arr.flat(Infinity)

console.log(another_arr);
console.log(a_arr);

//convert to array by (from)
console.log(Array.isArray("jeet"));
console.log(Array.from("jeet"));

//conver to array by(of)
mark1 = 100
mark2 = 200
mark3 = 300
console.log(Array.of(mark1,mark2,mark3));