// Declare dependcies
const fs = require("fs");
// Add a unique ID
const { v4: uuidv4 } = require("uuid");

module.exports = app => {
    // Read file, throw note if issue occurs
    fs.readFile("db/db.json", (err, data) => {
    // Throw error if issue occurs
    if (err) throw err;
    // Declare variable for notes
    let notes = JSON.parse(data);
    console.log(notes);

    // GET Request
    app.get("/api/notes", (req, res) => {
        // Read file and return response
        res.json(notes);
    });
    
    // POST Request
    app.post("/api/notes", (req, res) => {
        // Declare Variable for new note
        let newNote = req.body;
        // Create a unique id
        newNote.id = uuidv4();
        // Push new notes to notes
        notes.push(newNote);
        dbUpdate();
        // Console log the notes were entered
        console.log("Added new note to JSON file");
    });

    // GET Request for a specific id
    app.get("/api/notes/:id", (req, res) => {
        res.json(notes[req.params.id]);
    })

    // DELETE Request for a specific id
    app.delete("/api/notes/:id", (req, res) => {
        notes.splice(req.params.id, 1);
        dbUpdate();
        console.log("Note Deleted");
    })
        
    function dbUpdate() {
        fs.writeFile("db/db.json", JSON.stringify(notes, "\t"), err => {
            if (err) throw err;
            return true;
        });
    }
});
};




