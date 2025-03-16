const express = require('express');
const app = express();

const message = `Hello, my name is Sébastien, and I am a 16-year-old high school student from France. I am a software developer and full-stack Roblox game developer, passionate about technology, programming, and design. My expertise lies in LuaU and ForgeScript, which I have mastered, alongside strong skills in TypeScript, JavaScript, Python, HTML, CSS, and Roblox development.

I have experience creating Discord bots, developing innovative tools, and building complex game systems. My focus is on mastering game mechanics, UI/UX design, and web development, as these are key areas that drive my projects. I thrive in team environments, where collaboration fuels creativity and learning, allowing me to grow both personally and professionally.

Currently, I am dedicated to a major project while continuing to expand my knowledge in GUI design, advanced scripting, and full-stack game development. My dream is to become a self-employed entrepreneur, turning my ideas into impactful and sustainable tools.

Beyond development, I have a deep passion for music and have played the piano for over 9 years. One of my aspirations is to teach piano, sharing my love for music with others. I also enjoy hiking, as it helps me recharge and find inspiration in nature.

I am committed to learning, building, and creating technology that makes a difference, while staying connected to my passions in life.`

// Enable CORS for Roblox
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

// Home route
app.get('/', (req, res) => {
    res.send(message);
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

// Redirect /discord to Discord
app.get('/discord', (req, res) => {
    res.redirect('https://discord.com');
});

// Example route 4: Accept URL parameters (e.g., /api/say/hello)
app.get('/api/say/:word', (req, res) => {
    const word = req.params.word;
    res.json({ message: `You said: ${word}` });
});

// Export the app for Vercel (No app.listen())
module.exports = app;
