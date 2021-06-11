// Declare dependcies
const path = require("path");
const express = require("express");
const router = express.Router();

// Get request for notes page
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// Get request default for home page
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;