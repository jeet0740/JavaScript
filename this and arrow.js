// user = {
//     name: "jeet",
//     price: 999,
//     welcomemsg: function()
//     {
//         console.log(`${this.name} welcome to website`);
//         console.log(this);
//     } 
// }

// user.welcomemsg()
// user.name = "uday"
// user.welcomemsg()

// function chai()
// {
//     console.log(this);
// }

// chai()

// const chai = () => {
//     let username = "jeet"
//     console.log(this);
// }
// const addtwo = (num1,num2) => {
//   return num1+num2
// }

const addtwo = (num1,num2) => (num1+num2)

console.log(addtwo(5,10));

