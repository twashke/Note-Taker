// Declaring Dependencies
const express = require("express");
// Creating an express server 
const app = express();
const path = require("path");
// Creating a port for the server
const PORT = process.env.PORT || 8080;

// Link to public folder
app.use(express.static("public"));

// Maps server to router files
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);
// Link to public folder
app.use(express.static(__dirname));
// Data parsing using the express app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Listener to start the server
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});
