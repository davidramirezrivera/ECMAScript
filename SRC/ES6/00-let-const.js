var lastname = 'ramirez'; // global
lastname = 'rivera';
console.log(lastname);
let fruit = 'apple'; //bloque
fruit = 'kiwi';
console.log(fruit);
const animal = 'cat'; //invariable y de bloque
animal = 'dog';
console.log (animal)

const fruits = () => {
    if(true){
        var f1 ='apple';
        let f2 = 'banana';
        const f3 = 'kiwi';
    }
    console.log(f1);
    console.log(f3);
    console.log(f2);
    
}
fruits();
/* let y const solo se pueden usar en el bloque donde son llamados  */