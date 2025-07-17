import express from "express";
const app = express();
app.listen(8082, () => {
    console.log("Server Started...");
});

app.use(express.json());

let users = [];
const auth= (req,res,next)=>{
    if(req.headers.authorization){
        next();
    }
    else{
        res.send("Invalid Token")
    }
}

app.get("/", auth,(req, res) => {
    res.json(users);
    
});


app.post("/register", (req, res) => {
    const { name, email, pass } = req.body;

    const newUser = { name, email, pass };
    users.push(newUser);

    res.json({ message: "User registered", user: newUser });
});

app.post("/login", (req, res) => {
    const { email, pass } = req.body;

    const user = users.find(u => u.email === email && u.pass === pass);

    res.json({ message: `Welcome ${user.name}!` });
});
