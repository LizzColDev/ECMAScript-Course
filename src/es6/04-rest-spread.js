//expresiones de destructuración 

// arrays destructuring

let fruits =["Apple", "Banana"];
let[a,b] = fruits;
console.log(a, b); // Apple Banana
console.log(a, fruits[1]); // Apple Banana

let user = {userNAme: "Oscar", age:34};
let{userNAme, age} = user;
console.log(userNAme, age); // Oscar 34
console.log(userNAme, user.age); // Oscar 34

//spread operator
let person = {name:"Oscar", age:28};
let country = "MX";

let data = {...person, country}; //{ name: 'Oscar', age: 28, country: 'MX' } nos une las dos variables
console.log(data);

let data1 = {id:1, ...person, country};
console.log(data1); // nos une todo //{ id: 1, name: 'Oscar', age: 28, country: 'MX' }

// rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3); //[ 1, 2, 3 ] // 2

const originalArray = [1, [2,3] ,4,5]
const copyArray = structuredClone(originalArray)

console.log(originalArray === copyArray ) // false
console.log(originalArray[1] === copyArray[1]) // false


