const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/Workshop');

mongoose.connection.on("connected", () => console.log("Mongodb connected successfully"));
mongoose.connection.on("reconnected", () => console.log("Mongodb reconnected successfully"));
mongoose.connection.on("disconnected", () => console.log("Mongodb disconnected successfully"));
mongoose.connection.on("error", err => {
    console.error(err);
    console.log("Mongodb connected successfully");
    mongoose.disconnect();
});