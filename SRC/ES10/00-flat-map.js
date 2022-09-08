//flat
const array = [1,2,3,4,5, [2,3,4,5,6,7, [1,5,9,8,5,2]]];
console.log(array.flat(3));
//falt map
const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v =>[v, v * 2]));