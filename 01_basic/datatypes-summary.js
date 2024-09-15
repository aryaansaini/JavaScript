// Primitive -> 7 types


// 1. String 
// 2. Number
// 3. Boolearn
// 4. null
// 5. undefined
// 6. Symbol
// 7. BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);


// Reference (Non primitive)


// 1. Array
// 2. Objecct
// 3. Function

const heros = ["shaktiman", "naagraj", "doga"]

let myObj  = {
    name:"Aryan",
    age : 22,
}

const myFunction= function(){
    console.log("Aryan saini");
    
}



console.log(typeof heros);




// Return type of variables in JavaScript

// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

//                                              null,   Array -> Object