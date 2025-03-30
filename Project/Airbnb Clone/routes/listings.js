const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");
const wrapAsync = require("../utils/wrapasync");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingController = require("../controllers/listings.js");

// Index Route
router.route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn, validateListing, wrapAsync(listingController.createListing));

// New Listing Form Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

// Show Single Listing, Update, and Delete Routes
router.route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(isLoggedIn, isOwner, validateListing, wrapAsync(listingController.updateListing))
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

// Edit Listing Form Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

module.exports = router;
