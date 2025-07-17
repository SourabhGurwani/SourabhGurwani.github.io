import express from 'express';
import jwt from "jsonwebtoken";

const app =express();
const SECRET = "sometext.."
app.listen(8082,()=>{
    console.log("server started..")
})
const user= [ 
    {name:"John",email:"john@email.com",password:"1234",role:"user",},
    {name:"Cathy",email:"cathy@email.com",password:"2411",role:"admin"}
]
app.use(express.json())

const authenticate = (req,res,next)=>{
    try{
        let token = req.headers.authorization;
        token =token.split(" ")[1];
        const user = jwt.verify(token,SECRET)
        req.role = user.role
        next();
    }
    catch(err){
        return res.json({message:"Access Denied..!!!"})
    }
}

const authorize = (role) => {
    return (req, res, next) => {
        if (req.role === role) {
            next();
        } else {
            res.json({ message: "Unauthorization Access" });
        }
    };
};
app.post("/login",(req,res)=>{
    const{email,password}=req.body;
    const found = user.find(user=> user.email ===email && user.password ===password);
    if(found){
        const token =jwt.sign(found,SECRET,{expiresIn:"1h"});
        res.status(200).json({user:found,token})
    }
    else{
        res.status(400).json({message:"Access Denied..!!!"})
    }
});

app.get("/users",authenticate,authorize("admin"),(req,res)=>{
    res.json(user)
})


