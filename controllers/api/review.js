require("dotenv").config();
const { get } = require('mongoose')
const Review = require("../../models/review");
const User = require("../../models/user")

const writeReview = async (req, res) => {
  try {
    const { userId,title, author, text, genre, rating, images } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }
    const bookReview = new Review({ userId, title, author, text, genre, rating, images });
    await bookReview.save();
    res.status(201).json({ message: "Review created", data: bookReview });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const editReview = async (req, res) => {
  const { id } = req.params;
  const { text, author, genre, title, rating, images, like } = req.body; // Added 'like' here
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      id,
      { title, author, text, genre, rating, images, like }, // Added 'like' here
      { new: true, runValidators: true }
    );
    if (!updatedReview) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.status(200).json({ message: "Review updated", data: updatedReview });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const listReviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate('userId', 'username');
    reviews.reverse()
    res.status(200).json({ data: reviews });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getReview = async (req, res) => {
  const { id } = req.params;
  try {
    const review = await Review.findById(id);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.status(200).json({ data: review });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATED: Better like functionality
const likeReview = async (req, res) => {
  const { id } = req.params;
  try {
    const review = await Review.findById(id);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    
    // Increment the like count
    review.like = (review.like || 0) + 1;
    await review.save();
    
    res.status(200).json({ message: "Review liked", data: review });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// NEW: Add comment functionality
const addComment = async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  
  try {
    const review = await Review.findById(id);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    
    if (!text || text.trim() === '') {
      return res.status(400).json({ message: "Comment text is required" });
    }
    
    // Create new comment object
    const newComment = {
      text: text.trim(),
      likes: 0,
      createdAt: new Date()
    };
    
    // Add comment to review
    if (!review.comments) {
      review.comments = [];
    }
    review.comments.push(newComment);
    
    await review.save();
    
    // Return the new comment
    const addedComment = review.comments[review.comments.length - 1];
    res.status(201).json({ message: "Comment added", data: addedComment });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// NEW: Like comment functionality
const likeComment = async (req, res) => {
  const { id, commentId } = req.params;
  
  try {
    const review = await Review.findById(id);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    
    // Find the comment
    const comment = review.comments.id(commentId);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    
    // Increment comment likes
    comment.likes = (comment.likes || 0) + 1;
    await review.save();
    
    res.status(200).json({ message: "Comment liked", data: comment });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// Edit comment functionality
const editComment = async (req, res) => {
  const { id, commentId } = req.params;
  const { text } = req.body;
  
  try {
    const review = await Review.findById(id);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    
    // Find the comment
    const comment = review.comments.id(commentId);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    
    if (!text || text.trim() === '') {
      return res.status(400).json({ message: "Comment text is required" });
    }
    
    // Update comment text and add updatedAt timestamp
    comment.text = text.trim();
    comment.updatedAt = new Date();
    
    await review.save();
    
    res.status(200).json({ message: "Comment updated", data: comment });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const handleDeleteReview = (reviewId: string) => {
  Alert.alert(
    "Delete Review",
    "Are you sure you want to delete this review?",
    [
      { text: "Cancel", style: "cancel" },
      { 
        text: "Delete", 
        style: "destructive",
        onPress: async () => {
          try {
            console.log("🗑️ Attempting to delete review:", reviewId);
            const url = `https://franky-app-ix96j.ondigitalocean.app/api/review/${reviewId}`;
            console.log("📡 DELETE request URL:", url);
            
            const response = await axios.delete(url);
            console.log("✅ Delete review response:", response.data);
            console.log("📊 Response status:", response.status);
            
            setReviews(prevReviews => 
              prevReviews.filter(review => review._id !== reviewId)
            );
            
            Alert.alert("Success", "Review deleted successfully!");
          } catch (error: any) {
            console.error("❌ Error deleting review:", error);
            console.error("📋 Error details:", error.response?.data);
            console.error("🔢 Error status:", error.response?.status);
            console.error("🌐 Full error response:", error.response);
            Alert.alert("Error", `Failed to delete review: ${error.response?.data?.message || error.message}`);
          }
        }
      }
    ]
  );
};

const handleDeleteComment = (reviewId: string, commentId: string) => {
  Alert.alert(
    "Delete Comment",
    "Are you sure you want to delete this comment?",
    [
      { text: "Cancel", style: "cancel" },
      { 
        text: "Delete", 
        style: "destructive",
        onPress: async () => {
          try {
            console.log("🗑️ Attempting to delete comment:", commentId, "from review:", reviewId);
            const url = `https://franky-app-ix96j.ondigitalocean.app/api/review/${reviewId}/comment/${commentId}`;
            console.log("📡 DELETE request URL:", url);
            
            const response = await axios.delete(url);
            console.log("✅ Delete comment response:", response.data);
            console.log("📊 Response status:", response.status);
            
            setReviews(prevReviews =>
              prevReviews.map(review =>
                review._id === reviewId
                  ? {
                      ...review,
                      comments: review.comments?.filter(comment => comment._id !== commentId) || []
                    }
                  : review
              )
            );
            
            Alert.alert("Success", "Comment deleted successfully!");
          } catch (error: any) {
            console.error("❌ Error deleting comment:", error);
            console.error("📋 Error details:", error.response?.data);
            console.error("🔢 Error status:", error.response?.status);
            console.error("🌐 Full error response:", error.response);
            Alert.alert("Error", `Failed to delete comment: ${error.response?.data?.message || error.message}`);
          }
        }
      }
    ]
  );
};
;

module.exports = {
  writeReview,
  editReview,
  deleteReview,
  listReviews,
  getReview,
  likeReview,
  addComment,    // NEW
  likeComment, 
  editComment, 
  deleteComment  // NEW
};