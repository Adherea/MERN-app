// goalRoutes.js
const express = require("express");
const router = express.Router();
const { getGoals, setGoal, updateGoal, deleteGoal } = require("../controllers/goalController");
const { protect } = require("../middleware/authMiddleware"); // Tambahkan ini

router.get("/", protect, getGoals);
router.post("/", protect, setGoal);
router.delete("/:id", protect, deleteGoal);
router.put("/:id", protect, updateGoal);

module.exports = router;
