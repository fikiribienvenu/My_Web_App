const express = require('express');
const app = express();
const port = 3000;

// Home route
app.get('/', (req, res) => {
    res.send('Home Page About Fikiri Project.');
});

// About route
app.get('/about', (req, res) => {
    res.send('About Page');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

