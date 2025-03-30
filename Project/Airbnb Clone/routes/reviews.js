const express = require("express");
const router = express.Router({ mergeParams: true });
const Listing = require("../models/listing");
const Review = require("../models/review");
const wrapAsync = require("../utils/wrapasync");
const ExpressError = require("../utils/ExpressError");
const {validateReview,isLoggedIn,isReviewAuthor} = require("../middleware.js")

const reviewController = require("../controllers/reviews.js");

// Create Review Route
router.post("/", validateReview,isLoggedIn, wrapAsync(reviewController.renderNewReview));

// Delete Review Route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;
