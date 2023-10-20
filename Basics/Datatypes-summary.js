// Primitive 

// 7 Types : String , Number , Boolean , null , undefined , symbol,bigInt

// Reference (Non primitive)

// Array , object , function


// Js is dynamically Typed language

// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) ,   Heap (Non Primitive  )

// Stack uses copy , Heap uses Reference

let name = "Astitva Bhardwaj"

let anotherName = name 

anotherName = "ash"

console.log(name);

console.log(anotherName);

//Here name does'nt change bcz anotherName just gots a copy Name , not its reference

let userOne = {
    email : "ast@gmail.com" ,
    upi : "xyz@ybl"
}

let userTwo = userOne ;

userTwo.upi = "Asb@ybl";

console.log(userOne.upi);

// Here userOne got changed bcz we have used a object so userTwo got the reference of userOne , so changes in userTwo also gonna empact userOne
