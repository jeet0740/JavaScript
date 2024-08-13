//function saymyname()
//{
//    console.log("jeet");
//}
//saymyname()

function calcutatecartprice(...num1)
{
    return num1
}
console.log(calcutatecartprice(100,298,800));

user = {
    username: "jeet",
    price: 199
}

function handleobjact(anyobjact)
{
    console.log(`username is ${anyobjact.username} and price is ${anyobjact.price}`);
}
handleobjact(user)

const arr = [10,20,30,40]
function returnval (getarray)
{
    return getarray[2]
}
console.log(returnval(arr))