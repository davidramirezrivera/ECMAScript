//enahced object literals
//Ecma script 5
function newUser(user,age,country){
    return{
        user: user,
        age: age,
        country: country
    };
}

//tambien puede ser expresado de la siguiente forma 
//ECMA SCRIPT 6
function newUser(user,age,country,uId){
    return{
        user,
        age,
        country,
    };
}
