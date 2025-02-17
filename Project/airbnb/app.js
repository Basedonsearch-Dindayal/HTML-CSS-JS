const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Wonderlust");
}

main()
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

// Root Route
app.get("/", (req, res) => {
    res.send("This is root");
});

// All Listings Route
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
});

//new create route
app.get("/listing/new",(res,req)=>{
    res.render("new");
})

// All Show Route
app.get("/listings/:id", async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show",{listing});
});


app.listen(8080, () => {
    console.log("Server is listening on port: 8080");
});
