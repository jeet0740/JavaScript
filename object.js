//singleton
//object.create()

//object literals
const mysymbol = Symbol("key1")
const jsUser = {
    name: "jeet",
    "full name": "jeet Nakrani",
    [mysymbol]: "mykey1",
    age: 20,
    location: "jaipur",
    isloggedin: false
}

console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser["full name"]);
console.log(jsUser[mysymbol]);

//change or overwrite value of key
console.log(jsUser.age=19)

//frezz objact so value can't be changed
Object.freeze(jsUser);
console.log(jsUser);