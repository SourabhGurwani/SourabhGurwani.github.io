

import express from "express";
const app = express();

app.listen(8082, () => {
    console.log("Server Started...");
});

app.use(express.json());


// POST route to add a product (destructuring req.body)
app.post("/", (req, res) => {
    const { name, price } = req.body;

    const newProduct = {
        id: products.length + 1, // auto-increment id
        name,
        price
    };

    products.push(newProduct);
    res.json({ message: "Product created", product: newProduct });
});

// GET route to return all products (destructuring in map)
app.get("/", (req, res) => {
    const result = products.map(({ id, name, price }) => ({
        id,
        name,
        price
    }));
    res.json(result);
});


