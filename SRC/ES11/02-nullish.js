const anotherNumber = null;
const validate = anotherNumber ?? 5; // el doble signo de interrogacion ?? permite que cuando llegue un valor nulo este adquiera el valor que determino el usuario en este caso el 5. 
console.log(validate);