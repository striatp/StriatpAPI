const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for Roblox
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to my API, uh, yes.');
});

// Example route 1: Get a message
app.get('/api/message', (req, res) => {
    res.json({ message: "Hello from your API!" });
});

// Example route 2: Return user data
app.get('/api/user', (req, res) => {
    res.json({ username: "Striatp", role: "Developer" });
});

// Example route 3: Get a random number
app.get('/api/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100);
    res.json({ number: randomNumber });
});


// Example route 4: Accept URL parameters (e.g., /api/say/hello)
app.get('/api/say/:word', (req, res) => {
    const word = req.params.word;
    res.json({ message: `You said: ${word}` });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
