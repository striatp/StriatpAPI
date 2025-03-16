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
        body { font-family: Arial, sans-serif; margin: 40px; padding: 20px; background-color: #EEEEEE; }
        h1 { color:rgb(50, 71, 91); }
        p { color: #333; line-height: 1.6; }
        strong { font-weight: bold; }
        .container { max-width: 800px; margin: auto; padding: 20px; background: white; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
    </style>
</head>
<body>
    <div class="container">
        <h1>About Me</h1>
        <p><strong>Hey, I'm Sébastien!</strong> I'm a <strong>16-year-old high school student from France</strong> who loves programming, technology, and design. 
        I'm a <strong>software developer and full-stack Roblox game developer</strong> with a strong passion for creating and improving digital experiences.</p>

        <p>I've been working with <strong>LuaU and ForgeScript</strong> for years, and I also have solid experience in <strong>TypeScript, JavaScript, Python, HTML, CSS</strong>, and <strong>Roblox development</strong>. 
        Whether it's scripting, UI/UX design, or web development, I'm always looking for ways to improve and push my skills further.</p>

        <p>I enjoy building <strong>Discord bots</strong>, developing tools, and designing complex game systems. 
        I love working in <strong>team environments</strong> where I can learn, collaborate, and bring creative ideas to life.</p>

        <p>Right now, I'm focusing on a <strong>major project</strong> while also diving deeper into <strong>GUI design, advanced scripting, and full-stack game development</strong>. 
        My goal is to become a <strong>self-employed developer</strong> and turn my ideas into meaningful and sustainable tools.</p>

        <p>Besides programming, music is a big part of my life—I’ve been playing the <strong>piano for over 9 years</strong>, and I’d love to teach it one day. 
        I also enjoy <strong>hiking</strong> to take a break and get inspired by nature.</p>

        <p>I'm always looking to learn new things, improve my projects, and create tools that make a difference.</p>
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
