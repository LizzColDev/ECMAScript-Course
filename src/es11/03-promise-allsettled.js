// promesa de si todo ha sido resuelto sucederá lo siguiente

const promise = new Promise ((resolve, reject) => reject('Reject'));
const promise2 = new Promise ((resolve, reject) => resolve('resolve'));
const promise3 = new Promise((resolve, reject) => resolve('Resolve 2'));

Promise.allSettled([promise, promise2, promise3])
.then(response => console.log(response));
// resultado
// [
//     { status: 'rejected', reason: 'Reject' },
//     { status: 'fulfilled', value: 'resolve' },
//     { status: 'fulfilled', value: 'Resolve 2' }
// ]

const promesa1 = Promise.reject("Ups promesa 1 falló")
const promesa2 = Promise.resolve("Promesa 2")
const promesa3 = Promise.reject("Ups promesa 3 falló")

Promise.allSettled([promesa1, promesa2, promesa3])
    .then(respuesta => console.log(respuesta))

    // [
    //     { status: 'rejected', reason: 'Ups promesa 1 falló' },
    //     { status: 'fulfilled', value: 'Promesa 2' },
    //     { status: 'rejected', reason: 'Ups promesa 3 falló' }
    //   ]