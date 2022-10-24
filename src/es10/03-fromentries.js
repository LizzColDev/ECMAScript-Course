// cambiar de un array de arrays a un objeto

const entries = new Map([["name", "Oscar"], ["age", 34]]);
console.log(entries); // Map(2) { 'name' => 'Oscar', 'age' => 34 }
console.log(Object.fromEntries(entries)); // { name: 'Oscar', age: 34 }

// otro ejemplo

const arrayEntries = [
    [ 'name', 'Lizz' ],
    [ 'email', 'liz@correo.com' ],
    [ 'age', 35 ]
] 

const usuario = Object.fromEntries(arrayEntries) 

  console.log(usuario) // { name: 'Lizz', email: 'liz@correo.com', age: 35 }
