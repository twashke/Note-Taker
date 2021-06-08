// Declaring Dependencies
const path = require('path');

module.exports = (app) => {
    // Get request for home page
    app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
    });
    // Get request for notes page
    app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    // Default to home if no matching requests are found
    app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};
