//promises = >
// javaScript is async(not wait for any lines) 

// function f1(){
//     setTimeout(()=>{
//         return 5;
//     },1000)  // it is used for delay return of 5..for line 16 
    
// }

// function f2(x){
//     console.log(x+5)
// }

// const n = f1()
// const result =f2(n) // it will not wait for n value as it is delayed , and x will be NaN, 
// console.log(result)


// function f1(...nums){
//     return new Promise((resolve,reject)=>{
//         if(nums > 5){
//             resolve(nums);
//         }
//         else
//         reject("something went wrong!!!!");
//     }) ;
    
// }

// function f2(x){
//     console.log(x+5)
// }

// f1(11)
// .then(n=>f2(n))
// .catch((err)=>console.log(err))



// fetch("https://jsonplaceholder.typicode.com/users")  //Fetch user data from an online JSON API and print each user's name using fetch() and .map().
// .then((res)=>res.json())
// .then((data)=>{
//     data.map(val=>{
//         console.log(`${val.name} => ${val.email}`)
//     })
// })
// .catch((err)=>console.log(err))



const fecthData= async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json(); //await is used to pause the execution of an async function until the Promise is resolved, so you get the actual result (not a Promise object).
};







