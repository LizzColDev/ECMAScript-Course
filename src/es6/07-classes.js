// declarando
class User{};

// instancia de una clase:
//const newUser = new User();

class User1 {
    //métodos
    greeting(){
        return "Hello";
    }
};

const lizz = new User1();
console.log(lizz.greeting()); // Hello
const bebeloper = new User1();
console.log(bebeloper.greeting()); // Hello

//constructor

class NewUser {
    //constructor
}

class NewUser2 {
    constructor(name) {
        // this
        this.name = name;
    }
    // métodos
    speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`
    }
}

const ana = new NewUser2("Ana")
console.log(ana.greeting()) // Hello Ana

// setters and getters

class User3 {
    // constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //métodos
    speak(){
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`
    }
    get uAge() {
        return this.age
    }
    set uAge(n) {
        this.age = n;
    }
}

const david = new User3("David", 15);
console.log(david.uAge);
console.log(david.uAge = 20);
console.log(david.age)