//objects literals

const mySym = Symbol("key1")

const sym  = Symbol()

const JsUser = {
    name : "Astitva ",
    "full Name" : "Astitva Bhardwaj",
    [mySym] : "MyKEyxyz",

    [sym] : 'hello',
    age : 20 ,
    location : "Delhi",
    email : "astitva@google.com",
    isLoggedIn : false ,
    lastLoginDays: ["monday" , "friday"]
}

JsUser.email = "astitva@microsoft.com"

// Object.freeze(JsUser) //Now changes cannot Happen in our object

// console.log(JsUser.email)

// console.log(JsUser["email"])

// console.log(JsUser["full Name"])

// console.log(JsUser.sym);

JsUser.Greeting = function(){
    console.log(`Hii ${this["full Name"]}`)
}

console.log(JsUser.Greeting)
console.log(JsUser.Greeting())