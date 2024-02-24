const difference = (x,y) => x - y;
const multiply = (num1,num2,num3,num4) => num1 * num2 * num3 * num4;



//  use angel single or 
const getAge = (person) => person.age;
const student = {name : 'Ratul' ,age : 17};
const age = getAge(student);
console.log(age)

// don't use angle anonimus Es6
const getThird = numbers => numbers[4];
const third = getThird([1,2,4,5,452,3,6,8,7,8,124,545,857])
console.log(third)


const doubleIt = num => num * 2;


// no perameter

const getPI = () => Math.PI
console.log(getPI())


// large arrow function if you get to anything returnted form this function .than you have to use the return keyword
const doMath = (a,b,c) => {
    const sum = a+ b+c;
    const mult = a*b*c;
    const result = sum + mult;
    return result
}


const actor = {
    name:'ratul',
    age:17,
    money : '64434152814'
}


const {name} = actor

// const name = actor.money;
console.log(name)