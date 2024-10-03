

// object literals


const mySym = Symbol("key1")


const JsUser = {
    name: "Aryan", 
    "full name":"Aryan Saini",
    age: 18,
    location: "jaipur",
    email: "aryan@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]


}

console.log(JsUser.email);
console.log(JsUser["email"]);


