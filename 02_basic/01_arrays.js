//array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["aryan", "saini"]

// const myArr2 = new Array[1,2,3,4]
// console.log(myArr[0]);

// ARRAY METHODES

myArr.push(6)
myArr.push(7)
// push sai Array mai value add hoon jati ha

myArr.pop()

// pop sai Array mai sai value remove hoon jati hai

myArr.unshift(99)
// unshift sai array mai first value add hoon jati hai

myArr.shift()
// shift sai value remove hoti h 

console.log(myArr);


console.log(myArr.includes(9));
console.log(myArr.indexOf(3));


const newArr = myArr.join()  
// join array bind bhi krta h array kho ar string mai convert kar data hai
console.log(newArr);
console.log(typeof newArr);


// slice, splice

 console.log("A ", myArr);

 const myn1 = myArr.slice(1, 3)

 console.log(myn1);
 console.log("B ", myArr);

 const myn2 = myArr.splice(1, 3)
 console.log("C ", myArr);
 console.log(myn2);
 
 





