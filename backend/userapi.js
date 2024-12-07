const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());

// In-memory user store
const users = [];
const carts = {};

// Signup route
app.post('/signup', (req, res) => {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
        return res.status(400).send('Username, password, and email are required');
    }

    // Check if user already exists
    const userExists = users.some(user => user.username === username || user.email === email);
    if (userExists) {
        return res.status(409).send('User with this username or email already exists');
    }

    // Add new user
    users.push({ username, password, email });
    carts[username] = [];  // Initialize the user's cart
    res.status(201).send('User signed up successfully');
});

// Add to cart route
app.post('/add-to-cart', (req, res) => {
    const { username, item } = req.body;

    if (!username || !item) {
        return res.status(400).send('Username and item are required');
    }

    // Find the user
    const user = users.find(user => user.username === username);
    if (!user) {
        return res.status(404).send('User not found');
    }

    // Add item to the user's cart
    carts[username].push(item);
    res.status(200).send('Item added to cart');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
