//LIBRARY
const express = require("express");
const cors = require("cors");


//REQUIRE DB
const route = require("./routes");
const dotenv = require("dotenv");
require('./dbClient')
const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(route);

// handle 404 error if there are no file
app.use("*", (req, res, next) => {
    return [
        res.status(404).json({ message : "Endpoint doesn't exist" })
    ]
});

const port = 5000;

app.listen(port, () =>{
    console.clear();
    console.info(
        "Server app has started on PORT: " +
            port +
            ' at "' +
            new Date().toUTCString() +
            '"'
    );
});

module.exports = () => {
    app = app || express();
    return app;
};