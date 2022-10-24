// transforma objetos en un array con arrays

const countries = {MX: "México", CO:"Colombia", CL: "Chile", PE: "Perú"};
console.log(Object.entries(countries));
// RESULTADO:
// [
//     [ 'MX', 'México' ],
//     [ 'CO', 'Colombia' ],
//     [ 'CL', 'Chile' ],
//     [ 'PE', 'Perú' ]
//   ]