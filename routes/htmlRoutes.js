// Declare dependcies
const path = require("path");

module.exports = app => {

    // Get request for notes page
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // Get request default for home page
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

};


