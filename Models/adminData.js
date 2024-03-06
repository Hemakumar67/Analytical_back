const mongoose = require("mongoose");

const adminData = new mongoose.Schema(
    {
        username: String,
        bikeName: String,
        Date: {
            type: Date,
            default: Date.now
        },
        minutes: Number
    }
);

module.exports = mongoose.model("adminData", adminData);
