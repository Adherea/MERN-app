// userRoutes.js
const express = require("express");
const router = express.Router();
const { registerUser, getMe, loginUser } = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

// Pastikan Anda menetapkan route POST /api/users ke fungsi registerUser
router.post("/", registerUser);

// Tambahkan middleware protect jika diperlukan
// router.post("/", protect, registerUser);

// Tambahkan route lainnya jika diperlukan
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;
