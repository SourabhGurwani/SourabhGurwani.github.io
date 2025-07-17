import express from 'express'

const app =express()

app.listen(8082,()=>{
    console.log("server started...")
});

// app.get("/",(req,res)=>{
//     res.send("Good Morning Guyss...")
// });

// app.get("/user",(req,res)=>{
//     res.send("Hello User!!!")
// });

// app.get("/ab*cd",(req,res)=>{
//     res.send("Hello World..!!!")
// });

// app.get("/products",(req,res)=>{
//     res.status(201).json({
//         name:"product1",price:45
//     });
// })

// app.get("/products",(req,res)=>{
//     const products = [
//         {name:"product1",price:45},
//         {name:"product2",price :70},
//         {name:"product3",price :85},
//     ];
//     res.json(products)
// });

// app.get("/:name",(req,res)=>{
//     res.send(`Hello ${req.params.name}`)
// })

// app.get("/student/:name",(req,res)=>{
//     res.send(`Hello ${req.params.name}`)
// })

// app.get("/student/:name/age/:age",(req,res)=>{
//     res.send(`Name:  ${req.params.name} , 'Age: ${req.params.age}`)
// })

// app.get("/",(req,res)=>{
//     res.send(req.headers.authorization)
// })


// app.get("/",(req,res)=>{
//     res.send(req.query.name + req.query.age)
// })


const products = [
        {id:1,name:"product1",price:45},
        {id:2,name:"product2",price :70},
        {id:3,name:"product3",price :85},
    ];
app.get("/products/:id",(req,res)=>{
    const id = req.params.id;
    const product = products.find(ele => ele.id===id);
    res.json(products)

});