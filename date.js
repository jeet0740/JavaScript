//dates

let mydate = new Date();
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toLocaleString())
console.log(typeof mydate)

let createdate = new Date(2024,6,14)//("2024-00-14" m)
console.log(createdate.toDateString())
console.log(createdate.toLocaleDateString())
console.log(createdate.toLocaleString())

console.log(
    createdate.toLocaleString('default',{
    weekday : "long",
    month : "long"
}))