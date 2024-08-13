//stack - primitive // heap non-primitive

let myname = "jeet";
let anothername = myname;
anothername = "Uday";

console.log(myname);
console.log(anothername);

//heap memory

let userone = {
    name: "jeet"
}

let usertwo = userone

usertwo.name = "uday"

console.log(userone);
console.log(usertwo);

