const express = require('express');
const app = express();

const message = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Sébastien</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; padding: 20px; background-color: #f4f4f4; }
        h1 { color: #2c3e50; }
        p { color: #34495e; line-height: 1.6; }
        strong { color: #e74c3c; }
        .container { max-width: 800px; margin: auto; padding: 20px; background: white; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
    </style>
</head>
<body>
    <div class="container">
        <h1>About Me</h1>
        <p><strong>Hello, my name is Sébastien</strong>, and I am a <strong>16-year-old high school student from France</strong>. 
        I am a <strong>software developer and full-stack Roblox game developer</strong>, passionate about <strong>technology, programming, and design</strong>.</p>

        <p>My expertise lies in <strong>LuaU and ForgeScript</strong>, which I have mastered, alongside strong skills in 
        <strong>TypeScript, JavaScript, Python, HTML, CSS</strong>, and <strong>Roblox development</strong>.</p>

        <p>I have experience creating <strong>Discord bots</strong>, developing innovative tools, and building complex game systems. 
        My focus is on <strong>mastering game mechanics, UI/UX design, and web development</strong>, as these are key areas that drive my projects. 
        I thrive in <strong>team environments</strong>, where collaboration fuels creativity and learning, allowing me to grow both personally and professionally.</p>

        <p>Currently, I am dedicated to a <strong>major project</strong> while continuing to expand my knowledge in 
        <strong>GUI design, advanced scripting, and full-stack game development</strong>. My dream is to become a <strong>self-employed entrepreneur</strong>, 
        turning my ideas into impactful and sustainable tools.</p>

        <p>Beyond development, I have a deep passion for <strong>music</strong> and have played the <strong>piano for over 9 years</strong>. 
        One of my aspirations is to teach piano, sharing my love for music with others. I also enjoy <strong>hiking</strong>, as it helps me recharge and find inspiration in nature.</p>

        <p><strong>I am committed to learning, building, and creating technology that makes a difference</strong>, while staying connected to my passions in life.</p>
    </div>
</body>
</html>
`;

// Enable CORS for Roblox
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

// Home route (returns formatted HTML message)
app.get('/', (req, res) => {
    res.send(message);
});

// Example API routes
app.get('/api/message', (req, res) => {
    res.json({ message: "Hello from your API!" });
});

app.get('/api/user', (req, res) => {
    res.json({ username: "Striatp", role: "Developer" });
});

app.get('/api/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100);
    res.json({ number: randomNumber });
});

// Redirect /discord to Discord
app.get('/discord', (req, res) => {
    res.redirect('https://discord.com');
});

// Example route to accept URL parameters (e.g., /api/say/hello)
app.get('/api/say/:word', (req, res) => {
    const word = req.params.word;
    res.json({ message: `You said: ${word}` });
});

// Export the app for Vercel (No app.listen())
module.exports = app;
