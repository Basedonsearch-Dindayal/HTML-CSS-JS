const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
        console.log("MongoDB connection successful");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
}

main().catch(err => console.error("MongoDB connection error:", err));

// Root Route
app.get("/", (req, res) => {
    res.send("Root is working");
});

// Index (chat) Route
app.get("/chats", async (req, res) => {
    try {
        let chats = await Chat.find({});
        res.render("index.ejs", { chats });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// New Chat Route
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});

// Create Chat Route (POST)
app.post("/chats", async (req, res) => {
    let { from, to, msg } = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),
    });

    try {
        await newChat.save();
        res.redirect("/chats");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// Start Server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});