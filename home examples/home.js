// let arr = [1,2,3,4];
// console.log(arr) // 10


// #2
// let arr = [1, [2,3,4]];
// console.log(arr) // 10;

// let obj = {
//    arr: [
//   1,2,3  
//   ]
// };


// console.log(obj.arr) // 6


const sum = [1, 2, 3, 4].reduce((partialSum, a) => partialSum + a, 0);
console.log(sum); // 6