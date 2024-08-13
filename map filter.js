const mynums = [1,2,3,4,5,6,7,8,9,10]

// one line arrow function with filter
 const newnums = mynums.filter( (num) => num >4)
 console.log(newnums);

 //arrow function with filter
 const anothenum = mynums.filter( (num) => {
    return num > 4
 })
 console.log(anothenum);
