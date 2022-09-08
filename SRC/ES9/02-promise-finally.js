const anotherFunction = () =>{
    return new Promise((resolve,reject) =>{
        if(true){
            resolve('todo bien');
        }else{
            reject('nope');
        }
    })
}
anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'));