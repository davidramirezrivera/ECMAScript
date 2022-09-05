//arrays destructure
let fruits = ['apple', 'banana'];
let [a,b] = fruits;
console.log (a,fruits[1]);

//object destructure
let user = { userName:'david' ,  age:34};
let{userName,age} = user;
console.log(userName, user.age);

//spreed operator
let person = {name: 'oscar', age:20};
let coutry = 'mx';

let data ={ id:1, ...person, coutry};
console.log(data);

//rest
function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum (0, 1, 2, 3);