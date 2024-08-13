// immediatly invoked function expression

//named iife
(function chia(){
    console.log(`database connected`);
})();

//simple iffe (arrow function)
((name) => {
    console.log(`db connected ${name}`);
})('jeet');
//saimin seishidou ep 4