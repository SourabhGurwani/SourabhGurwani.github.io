//Arrays

// const score= [2,1,7,4,8]
// // console.log(score)
// // score.push(9) // add at end
// // console.log(score)
// const newScore = [...score,11]
// console.log(newScore)

// const cart={
//     1:5,
//     5:3,
// }

// const newCart=({...cart , 2:1})
// // console.log(newCart)


const products=[
    { id:1,name:"product1",price:25},
    { id:2,name:"product2",price:53},
    { id:3,name:"product3",price:45}
]

// console.log(products[1])

let cart={}

function addToCart(id){
    if(!cart[id]){ // if id is not present in cart
        cart[id]=1; // add id with quantity 1
    }
    else cart = {...cart,[id]:cart[id]+1};
}
addToCart(1)
addToCart(2)
addToCart(2)
console.log(cart)





