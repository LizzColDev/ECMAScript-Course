class User3 {
    // constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //métodos // al agregarle el # lo hacemos privado, solo podrá ser usado dentro de la clase
    #speak(){
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`
    }
    get #uAge() {
        return this.age
    }
    set #uAge(n) {
        this.age = n;
    }
}

const david = new User3("David", 15);
console.log(david.uAge);
console.log(david.uAge = 20);
console.log(david.age)