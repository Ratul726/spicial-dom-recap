// const glass = {name:'glass',color:'golden',price:120,isCline : true};

// console.log(glass)

// const keys = Object.keys(glass)
// console.log(keys);


const numbers = [1,5,6,7,2,3,4,8,9];
for(let i = 0; i<numbers.length ; i++){
    // console.log(numbers[i])
}


const name = 'Ashraful Islam Ratul';
for(let nam of name){
    // console.log(nam)
}

const glass = {name:'glass',color:'golden',price:120,isCline : true};

// for(let gal in glas){
//     const value = glas[gal]
//     console.log(gal,value)
// }


const keys = Object.keys(glass);
for(let key of keys){
    const value = glass[key]
    console.log(key,value)
}