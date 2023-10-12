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

console.log("A " , myArr)

const myn1 = myArr.slice(1,3)

console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1,3)

console.log(myn2)

console.log("C " , myArr);