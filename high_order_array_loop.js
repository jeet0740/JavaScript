//for of loop
const arr = [1,2,3,4,5]

for (const element of arr) {
    console.log(element);
}

//for of loop for string

const arr2 = "Hello World!"
for (const word of arr2) {
    console.log(word);
}

//Maps : objact wich has no duplicate value and 
// remembers order of key value
const map = new Map()
map.set("In","India")
map.set("USA","United state of america")
map.set("Fr","France")
map.set("In","India")

console.log(map);
//two ways to print map object
for (const key of map) {
    console.log(key);
}

for (const [key,value] of map) {
    console.log(key, ":-" , value);
}

//for each with simple function
const coding = [ "js" , "php" , "java", "payhon" , "c++" ]
coding.forEach( function (item) {
    console.log(item)
}) 

//for each with arrow function

coding.forEach( (val)=>{
console.log(val);
})

//pridefined function with for each loop
function printme(item)
{
    console.log(item);
}
coding.forEach(printme)
//full method
function printme(item,index,arr)
{
    console.log(item,index,arr);
}
coding.forEach(printme)