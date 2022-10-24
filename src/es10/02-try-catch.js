// manejo de errores
// antes
try {
    hello();
} catch(error) {
    console.log(error);
}

//es10

try {
    anotherFn();
} catch { // ya no es necesario definir el error dentro del catch
    console.log("Esto es un error");
}
