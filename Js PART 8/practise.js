// 1. Square and sum the array and find the average
// let nums= [1,2,3,4,5];
// const square  = nums.map((nums) => nums*nums);
// console.log(square);
// let sum = square.reduce((acc,cur) => acc + cur,0);
// console.log(sum);
// let avg = sum/nums.length;
// console.log(avg);

// 2.create a new array using the map function whose each element is equal to the original array
// let nums = [1, 2, 3, 4, 5];
// console.log(`Original array is: ${nums}`);
// const add5 = nums.map((num) => num + 5);
// console.log(`After adding 5: ${add5}`);

// 3.create a new array whose element are in uppercase of words present in the original array
// let arr = ["amul","dhoodh","pita","hai","india"];
// console.log(arr);
// let newarr = arr.map((arr)=>arr.toUpperCase());
// console.log(newarr)

// 4.Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.
// let doubleAndReturnArgs = (arr,...args)=>[
//     ...arr,
//     ...args.map((el)=>el*2),
// ];
// console.log(doubleAndReturnArgs([1,2,3],4,5,6,7,8,9));

// 5.Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
let mergeObject =(obj1,obj2)=>({...obj1,...obj2});
console.log(mergeObject({a:1,b:2},{c:3,d:4}));
