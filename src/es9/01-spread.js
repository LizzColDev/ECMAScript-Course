const user = {username: "gndx", age: 34, country:"CO"};
const {username, ...values} = user; // divide la variable user en 2, en la primera deja el primer elemento y el la otra el resto
console.log(username); // gndx
console.log(values); //{ age: 34, country: 'CO' }
console.log(user); // { username: 'gndx', age: 34, country: 'CO' }