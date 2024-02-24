function add (a,b){
    const result = a + b;
    return result
}

function add (a,b){
    return a + b
}

const add2 = function(a,b){
    return a * b
}
// console.log(add2(14,4))

// Arrow function

const add3 = (a,b) => a + b
// console.log(add3(10,4))

const add4 = (a,b,c,d) => a + b * c / d;
console.log(add4(10,4,4,2))
