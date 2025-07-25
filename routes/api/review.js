const router = require('express').Router()
const reviewController = require('../../controllers/api/review.js')

// Basic CRUD routes
router.post('/', reviewController.writeReview)
router.put('/:id', reviewController.editReview)
router.delete('/:id', reviewController.deleteReview)
router.get('/:id', reviewController.getReview)
router.get('/', reviewController.listReviews)

// NEW: Like and comment routes
router.put('/:id/like', reviewController.likeReview)              // Like a review
router.post('/:id/comment', reviewController.addComment)          // Add comment to review
router.put('/:id/comment/:commentId/like', reviewController.likeComment) // Like a comment

module.exports = router