// Declare dependcies
const path = require("path");
const router = require("express").Router();

// -----------------------------------------|
//          HTML Route Requests             | 
// -----------------------------------------|

// Get request for notes page
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/../public/notes.html"));
});
    
// Get request default for home page
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/../public/index.html"));
});

module.exports = router;

