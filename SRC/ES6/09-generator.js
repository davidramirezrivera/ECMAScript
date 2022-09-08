function* interate(array){
    for(let value of array){
        yield value;
    }
}

const it = interate(['david', 'ana', 'oscar', 'nanacy', 'andres', 'luis']);
console.log(it.next().value);
// RECUERDA TIENE MEMEORIA DE QUIEN YA LLAMO 