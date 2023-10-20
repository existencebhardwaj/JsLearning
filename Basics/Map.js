// array

  let myArr = [1 , 2 , 4 , 5]
  myArr.push(6)

// console.log(myArr);

  myArr.pop();
//  console.log(myArr);

  myArr.unshift(9);

//  console.log(myArr);

  myArr.shift()

//   console.log(myArr);

//   console.log(myArr.includes(16))
//   console.log(myArr.indexOf(8));
//   console.log(myArr.indexOf(4));

// console.log("A " , myArr)

// const myn1 = myArr.slice(1,3)

// console.log(myn1);

// console.log("B ", myArr);

// const myn2 = myArr.splice(1,3)

// console.log(myn2)

// console.log("C " , myArr); 

// const greetings = "Hello World!"

// for (const greet of greetings) {
//   console.log(greet);
  
// }

/// Maps

const map = new Map()

map.set('IN' , 'India')

map.set('USA' , 'United States Of India')

map.set('FR' , 'France')

map.set('IN' , 'India')

// console.log(map)

for (const [code , name] of map) {
  console.log(code+ " :- " + name)
}