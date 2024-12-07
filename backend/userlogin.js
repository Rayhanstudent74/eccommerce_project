// Import necessary modules

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database Connection with MongoDB
mongoose.connect("mongodb+srv://rayhan3487:2215151074@cluster0.mmk6c.mongodb.net/StarkGadgetBD");

// API Creation
app.get("/", (req, res) => {
    res.send("Express App is Running");
});

// Schema for creating products
const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    }
});

// Endpoint to add product
app.post('/addproduct', async (req, res) => {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    } else {
        id = 1;
    }

    const product = new Product({
        id: req.body.id,
        name: req.body.name,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });

    await product.save();
    res.json({
        success: true,
        name: req.body.name,
    });
});

// Schema for creating users
const Users = mongoose.model('Users', {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

// API to register users
app.post('/signup', async (req, res) => {
    let check = await Users.findOne({ email: req.body.email });
    if (check) {
        return res.status(400).json({ success: false, errors: "Existing user found with same email id" });
    }

    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;  // Initialize empty cart
    }

    const user = new Users({
        name: req.body.username,  // Create the user
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    });

    await user.save();  // Save the user in the database

    const data = {
        user: {
            id: user.id
        }
    };

    const token = jwt.sign(data, 'secret_ecom');  // Generate the token
    res.json({ success: true, token });
});

// API to login users
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Validate email and password
    if (!email || !password) {
        return res.status(400).json({ success: false, errors: "Email and password are required" });
    }

    try {
        // Check if user exists
        const user = await Users.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, errors: "Invalid email or password" });
        }

        // Verify password
        if (user.password !== password) {
            return res.status(400).json({ success: false, errors: "Invalid email or password" });
        }

        // Generate token
        const data = {
            user: {
                id: user.id
            }
        };
        const token = jwt.sign(data, 'secret_ecom');
        res.json({ success: true, token });
    } catch (error) {
        res.status(500).json({ success: false, errors: "Server error" });
    }
});

// Start the server
app.listen(port, (error) => {
    if (!error) {
        console.log("Server Running on Port " + port);
    } else {
        console.log("Error: " + error);
    }
});
