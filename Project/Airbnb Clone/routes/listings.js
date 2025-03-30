const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");
const wrapAsync = require("../utils/wrapasync");
const {isLoggedIn,isOwner,validateListing} = require("../middleware.js");

const listingController = require("../controllers/listings.js");

// Index Route
router.get("/", wrapAsync(listingController.index));

// New Listing Form Route
router.get("/new", isLoggedIn ,listingController.renderNewForm);

// Show Single Listing Route
router.get("/:id",wrapAsync(listingController.showListing));

// Create New Listing Route
router.post("/",isLoggedIn,validateListing, wrapAsync(listingController.createListing));

// Edit Listing Form Route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));

// Update Listing Route
router.put("/:id",isLoggedIn,isOwner, validateListing, wrapAsync(listingController.updateListing));

// Delete Listing Route
router.delete("/:id",isLoggedIn,isOwner, wrapAsync(listingController.destroyListing));

module.exports = router;
