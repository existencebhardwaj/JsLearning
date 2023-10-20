function calculateCartPrice(...num)
{
    return num ;
}

// console.log(calculateCartPrice(200,400,600,2000))

let Book = {
    name : "The End",
    price: 600
}

function handleObject(anyObject)
{
    console.log(`${anyObject.name}'s price is ${anyObject.price}`)
}

handleObject(Book)