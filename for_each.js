const arr = [
    {
        language : "javascipt",
        filename : "js"
    },
    {
        language : "paython",
        filename : "py"
    },
    {
        language : "c++",
        filename : "cpp"
    }
]

arr.forEach( (item)=>{
    console.log(item.language);
    console.log(item.filename);
})