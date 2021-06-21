// Declare dependcies
const router = require("express").Router();
const fs = require("fs");
// Add a unique ID
const { v4: uuidv4 } = require("uuid");
// Acces db.json file
const dbFile = require("../db/db.json");

// -----------------------------------------|
//               Functions                  | 
// -----------------------------------------|

// Function to Save New Notes
function dbUpdate() {
    // Read file
    fs.writeFile("db/db.json", JSON.stringify(dbFile, "\t"), err => {
        // Throw error if issue occurs
        if (err) throw err;
        return true;
    });
};

// -----------------------------------------|
//            API Route Requests            | 
// -----------------------------------------|
    
// GET Request
router.get("/notes", (req, res) => {
// Read file and return response
    res.json(dbFile);
    console.log("Request successfull");
});

// POST Request
router.post("/notes", (req, res) => {
    // Declare Variables for new note
    const title = req.body.title;
    const text = req.body.text;
    const id = uuidv4();
    // Declare newNote fields
    const newNote = {
        title: title,
        text: text,
        id: id
    }
    // Push new notes to notes
    dbFile.push(newNote);
    dbUpdate();
    res.json(dbFile);
    // Console log the notes were entered
    console.log("Added new note to JSON file");
});

// GET Request for a specific id
router.get("/notes/:id", (req, res) => {
    res.json(dbFile[req.params.id]);
})

// DELETE Request for a specific id
router.delete("/notes/:id", (req, res) => {
    dbFile.splice(req.params.id, 1);
    dbUpdate();
    res.json(dbFile);
})

module.exports = router;