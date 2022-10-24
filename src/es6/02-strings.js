// template literals, permite concatenar de forma más amigable

let hello ="Hello";
let world = "World";
let epicPhrase = hello + " " + world + "!";

// template literals 

let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);

// multiline strings

let lorem = "esto es un string \n " + "esto es otra línea";

let lorem2 = `Esta es una frase épica
esta es la continuación de esa frase épica.
`;
console.log(lorem);
console.log(lorem2);