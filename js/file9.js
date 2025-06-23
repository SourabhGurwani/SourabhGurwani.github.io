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


//Array
// const score =[2,1,7,5,3]
// // score.forEach((ele,idx,arr)=>{
// //     console.log(ele)
// // })

// const newScore=score.map((value)=>{   // map=> works as forEach but store in new Array and also return val
//     return value > 2; // bool value

// });

// console.log(newScore)


// const score =[2,1,7,5,3]
// const newScore = score.filter((value)=>{
//     return value >2 // it will return values greater than 2
// })
// console.log(newScore)

// const score =[2,1,7,5,3]
// const newScore = score.find((value)=>{
//     return value >2 // it will return one value >2
// })
// console.log(newScore)

const score =[2,1,7,5,3]
const newScore = score.reduce((sum , val)=>{
    return sum + val
})
console.log(newScore)





