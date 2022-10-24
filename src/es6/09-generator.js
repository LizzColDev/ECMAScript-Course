function* iterate (array){
    for (let value of array) {
        yield value;
    }
}

const it = iterate(["Lizz", "Pedro", "Juan", "Sammy"]);
console.log(it.next().value); // Lizz
console.log(it.next().value); // Pedro
console.log(it.next().value); // Juan
console.log(it.next().value); // Sammy
console.log(it.next().value); // undefined
console.log(it.next().value); // undefined
console.log(it.next().value); // undefined
console.log(it.next().value); // undefined

function* iterate(array, array2){
    for (let value of array){
        yield value;
    }
    for(let value2 of array2){
        yield value2;
    }
}

const it2 = iterate(['Angel','Juan','Víctor','Marcos'], ['Angela', 'Juana', 'Víctoria', 'María']);
console.log(it2.next().value);
console.log(it2.next().value);
console.log(it2.next().value);
console.log(it2.next().value);
console.log(it2.next().value);
console.log(it2.next().value);
console.log(it2.next().value);
console.log(it2.next().value);
console.log(it2.next().value);