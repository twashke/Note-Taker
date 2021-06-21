// Declare Dependencies
const express = require("express");
// Declare Variable for Routes
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const app = express();

// Creating PORT for Server
const PORT = process.env.PORT || 3001;

// Link to public folder
app.use(express.static("public"));

// Data parsing using the express app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Map to API route
app.use("/api", apiRoutes);
// Map to HTML route
app.use("/", htmlRoutes);

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
});