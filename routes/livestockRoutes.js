const express = require("express");
const router = express.Router();

const livestockController = require("../controllers/livestockController");
const { cekApiKey } = require("../middleware/authMiddleware");

// GET semua livestock
router.get("/", livestockController.getAll);

// GET livestock berdasarkan ID
router.get("/:id", livestockController.getById);

// POST dilindungi API Key
router.post("/", cekApiKey, livestockController.create);

// PUT dilindungi API Key
router.put("/:id", cekApiKey, livestockController.update);

// DELETE dilindungi API Key
router.delete("/:id", cekApiKey, livestockController.remove);

module.exports = router;