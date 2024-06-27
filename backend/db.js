const mongoose = require('mongoose');

function connectwithdb() {
    mongoose.connect("mongodb://localhost:27017/Hotel_system", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Connected to the database");
    }).catch((err) => {
        console.error("Database connection error:", err);
    });
}

module.exports = connectwithdb;
