//  #1
// let arr = [1,2,3,4];
// console.log(arr) // 10


// #2
// let arr = [1, [2,3,4]];
// console.log(arr) // 10;


// #3
// let obj = {
//    arr: [
//   1,2,3  
//   ]
// };

// console.log(obj.arr) // 6




// #1
const sum = [1, 2, 3, 4].reduce((partialSum, a) => partialSum + a, 0);
console.log(sum); // 6



// #2
let arr = [1, [2, 3, 4]];
let sum1 = arr.flat().reduce((acc, val) => acc + val, 0);

console.log(sum1); // 10



// #3
let obj = {
   arr: [
  1, 2, 3  
  ]
};

// Calculate the sum of the elements in the array
let sum3 = obj.arr.reduce((acc, val) => acc + val, 0);

console.log(sum3); // 6
