/* para hacer que una variable tenga un parametro por defecto seria : */
function newUsur(nome, age, country){
    var nome = nome || 'andres';
    var age = age || 34;
    var country = country || 'MX';
    console.log (nome, age, country);
}
newUsur();
newUsur('David',23,'CO');

function newAdmin(name = 'andres', age = 34, country = 'USA'){
    console.log (name, age, country);
}
newAdmin();
newAdmin('ana', 75, 'CO');