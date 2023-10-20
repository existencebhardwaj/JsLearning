const obj1 = {1: "a" , 2: "b"}

const obj2 = {3: "c" , 4: "d"}
const obj3 = {5: "e" , 6: "f"}

///const obj4 = Object.assign({},obj1 , obj1 , obj2 , obj3)

const obj4  = {...obj1 , ...obj2}

// console.log(obj4)

const course = {
    courseName : "Js Hindi",
    price : "999" ,
    courseInstructor : "Hitesh"
}

// const {courseInstructor} = course

// console.log(courseInstructor)

const {courseInstructor: instructor} = course

console.log(instructor)
