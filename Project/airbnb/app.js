const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const wrapAsync = require("./utils/wrapasync.js");

// Import Routes
const listingRoutes = require("./routes/listings");
const reviewRoutes = require("./routes/reviews");

// MongoDB Connection
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Wonderlust");
}

main()
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

app.engine('ejs', ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// Use Routes
app.use("/listings", listingRoutes);
app.use("/listings/:id/reviews", reviewRoutes);

// Root Route
app.get("/", (req, res) => {
    res.send("This is root");
});

// Catch-all Route for 404 Errors
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something Went Wrong!" } = err;
    res.status(statusCode).render("error.ejs", { message });
});

app.listen(8080, () => {
    console.log("Server is listening on port: 8080");
});
