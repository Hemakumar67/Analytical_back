const mongoose = require("mongoose");

const loginUsersSchema = new mongoose.Schema(
    {
        username: String,
        password: String
    }
);

module.exports = mongoose.model("loginUsersSchema", loginUsersSchema);
