// junio 2015
// característica - let-const

var lastName = "David"; // declarar y asignar
lastName = "Oscar"; // reasigna
console.log(lastName);

//let

let fruit = "Apple";
fruit = "kiwi";
console.log(fruit);

const animal = "Dog";
animal = "Cat"; // const no deja reasignar ni redeclarar
console.log(animal);

const fruits = () => {
    if(true) {
        var fruit1="Apple"; // function scope - se accede desde todo el documento
        let fruit2 = "kiwi"; // block scope - solo se puede acceder desde el bloque de código
        const fruit3 = "Banana"; // block scope - solo se puede acceder desde el bloque de código
    }
    console.log(fruit1);
    console.log(fruit2); // muestra error
    console.log(fruit3); // muestra error
    
}
fruits()