var express = require("express");
const connectDb = require("./db");

var app = express();
const port = 4000;
connectDb();

app.get("/",(req,res) => {
    res.send("Hello Wolrd");
});

app.listen(port,() => {
    console.log(`App listening on port ${port}`);
});