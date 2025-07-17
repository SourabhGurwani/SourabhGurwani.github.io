import express from "express"
const app = express();
app.listen(8082,()=>{
    console.log("Hello World...");
})

app.use("/images",express.static("images"));  // localhost8082/images/imagees.jpeg

app.use(express.static("public"));

app.get("/products",(req,res)=>{
    res.send("Product List");
})

