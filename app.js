//LIBRARY
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handle 404 error if there are no file
app.use("*", (req, res, next) => {
    return [
        res.statusCode(404).json({
            code : 404,
            status : false,
            message : "Endpoint doesn't exist"
        })
    ]
});

const port = 3001;

const server = app.listen(port, () =>{
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