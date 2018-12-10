const mongoose = require('mongoose');

function mongooseInit() {
    mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/qa-app", { useNewUrlParser: true }, err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to database");
        }
    });
}
module.exports = mongooseInit

