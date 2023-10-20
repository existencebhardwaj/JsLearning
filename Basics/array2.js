const marvel = ["thor" , "Ironman", "spiderman"]

const dc  = ["superman" , "batman" , "flash"]

// marvel.push(dc)

// console.log(marvel);

// const all_heroes = marvel.concat(dc)

// console.log(all_heroes);

const all_new_heroes = [...marvel , ...dc] 
/// is a spread operator , used to spread elements of 1 array into other

// console.log(all_new_heroes);

const another_array = [1 , 2 ,3 ,[4,5] ,6 , [7 ,[8 , 9]]]

const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array)

console.log(Array.isArray("Astitva"))

console.log(Array.from("Astitva"))

console.log(Array.from({name:"Astitva"})) // INteresting case

let score1 = 100

let score2 = 100
let score3 = 100

console.log(Array.of(score1 , score2 , score3))



