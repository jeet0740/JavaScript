//singlton obj
//const jsUser = new Object() //returns empty object
const jsUser = {}

jsUser.id = "001"
jsUser.name = "jeet"
jsUser.isloggedin = false

console.log(jsUser);

const user = {
    username:{
        fullname:{
            firstname: "jeet",
            lastname: "nakrani"
        }
    }
}
console.log(user.username.fullname);
console.log(user.username.fullname.firstname);

//combine two object
const obj1 = {
    1: "A",
    2: "B"
}

const obj2 = {
    3: "C",
    4: "D"
}

const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);
const obj4 = {...obj1,...obj2}
console.log(obj4);

const cours = 
{
    coursename: "js",
    price: 999,
    courseinstructor: "hitesh"
}

const {courseinstructor: instructor} = cours
//console.log(courseinstructor);
console.log(instructor);