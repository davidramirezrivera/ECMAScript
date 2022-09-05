// declarando una variable 
class user {};
//instancia de una clase
//const newUser = new user();

class User2{
    //metodos
    greeting(){
        return 'hello';
    }
};

const gndx = new User2();
console.log(gndx.greeting());
const bebeLoper = new User2();
console.log(bebeLoper.greeting());

// constructor

class User3{
    constructor(){
        console.log('nuevo usuario');
    }
    greeting(){
        return 'hello';
    }
}
const david = new User3 ();

//this
class User4 {
    constructor(name){
        this.name = name;
    }
    //metodo
    speak(){
        return 'hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
}

const ana = new User4 ('ana');
console.log(ana.greeting());

//setters getters
class User5{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    speak(){
        return 'hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
    get uage(){
        return this.age;
    }
    set uage(n){
        this.age = n;
    }
}
const bbLoper = new User5('juana', 45);
console.log(bbLoper.uage);
console.log(bbLoper.uage = 25);