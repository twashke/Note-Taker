// Declaring Dependencies
const express = require("express");
// Declaring variables for Routes
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

// Creating an express server 
const app = express();
// Creating a port for the server
const PORT = process.env.PORT || 8080;

// Link to public folder
app.use(express.static("public"));
// Data parsing using the express app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Maps server to router files
app.use("/", htmlRoutes);
app.use("api/", apiRoutes);


// Listener to start the server
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});
