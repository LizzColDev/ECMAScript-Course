// validar sin romper el flujo de la aplicación

const users = {
    gndx: {
        country: 'MX'
    },
    ana: {
        country: 'CO'
    }
}

//console.log(users.gndx.country); // MX
//console.log(users.gndx.age); // undefined

//console.log(users.bebeloper.country); // ReferenceError: user is not defined
console.log(users?.bebeloper?.country); // undefined // con el signo de interrogación, le hacemos validación por si la información llega en un futuro