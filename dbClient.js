const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/auth", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
    console.log("MongoDB has connected successfully");
});

db.on("disconnected", () => {
    console.error("MongoDB connection is disconnected");
});

db.on("reconnected", () => {
    console.log("MongoDB has reconnected");
});

db.on("error", (error) => {
    console.error("MongoDB connection has an error", error);
});

module.exports = db;