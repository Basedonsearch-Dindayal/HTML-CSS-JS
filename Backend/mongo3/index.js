const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// MongoDB Connection
async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connection successful");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
}

// Roots Routes
app.get("/", (req, res) => {
    res.send("Root is working");
});
app.get("/chats", async (req, res) => {
    let chats = Chat.find();
    console.log(chats)
    res.send("working");
});

// Start Server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});
