// Dates

let myDate = new Date()

// console.log(myDate)

// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// console.log(myDate.toLocaleString())

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023 , 0 , 23 )

// let myCreatedDate = new Date(2023 , 0 , 23 , 5 , 4 )

// let myCreatedDate = new Date("2023-01-18")

let myCreatedDate = new Date("01-13-2023")

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp)

// console.log(myCreatedDate.getTime())

let newDate = new Date()

// console.log(newDate)
// console.log(newDate.getDate())
// console.log(newDate.getFullYear())

newDate.toLocaleString('default' , {
    weekday: "long"
})