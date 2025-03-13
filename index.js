const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for Roblox
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

// API endpoint
app.get('/api', (req, res) => {
    res.json({ message: "Hello from your Vercel API!" });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
