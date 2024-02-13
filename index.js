// importing express framework
const express = require("express");
const path = require("path")
const app = express();

// Respond with "hello world" for requests that hit our root "/"
app.get("/test", function (req, res) {
    return res.send("Hello World, Testerr");
});


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

// listen to port 7000 by default
app.listen(process.env.PORT || 7000, () => {
    console.log("Server is running");
});

module.exports = app;