function newUser(name, age, country) {
    var name = name || "Oscar";
    var age = age || "34";
    var country = country || "MX";
    console.log(name, age, country);
}

newUser(); // Salen los valores que asignamos por defecto //Oscar 34 MX
newUser("David", 15, "CO"); // salen los nuevos valores

//ahora la versión ES6 // se pueden asignar los valores por defecto en la misma línea

function newAdmin(name = "Oscar", age = 32, country="CL"){
    console.log(name, age, country);
}
newAdmin(); // Oscar 32 CL salen los valores por defecto que definimos en la parte de arriba
newAdmin("Pepito", 25, "PE"); // Pepito 25 PE, salen los nuevos valores

