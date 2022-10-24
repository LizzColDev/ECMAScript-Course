// promesa de si todo ha sido resuelto, sin importar que sea reject sucederá lo siguiente

const promise = new Promise ((resolve, reject) => reject('Reject'));
const promise2 = new Promise ((resolve, reject) => resolve('resolve'));
const promise3 = new Promise((resolve, reject) => resolve('Resolve 2'));

// capturará la respuesta de la primer promesa que se resuelva
Promise.any([promise, promise2, promise3]) 
.then(response => console.log(response)); // resolve

const promesa1 = Promise.reject("Ups promesa 1 falló")
const promesa2 = Promise.resolve("Promesa 2")
const promesa3 = Promise.reject("Ups promesa 3 falló")

Promise.any([promesa1, promesa2, promesa3])
    .then(respuesta => console.log(respuesta)) // Promesa 2
