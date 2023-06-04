const router = require("express").Router();
const mongoose = require("mongoose");

const Opportunity = require("../Models/Opportunity");

router.post("/create", async (req, res) => {
  try {
    const createdOpportunity = await Opportunity.create(req.body);
    res.status(200).json({ message: "Opportunity Created Successfully!" });
  } catch (error) {
    console.error("Failed to create document:", error);
    res.status(500).json({ error, message: "Failed to create document" });
  }
});

router.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "Hello World From Volunteer App!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Something went wrong!" });
  }
});

router.get("/:id", (req, res) => {});
router.put("/:id", (req, res) => {});
router.delete("/:id", async (req, res) => {
  // todo: add a auth check
  const { id } = req.params;
  // Check if the provided ID is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid ObjectId" });
  }
  try {
    const deletedDoc = await Opportunity.findByIdAndDelete(id);

    if (!deletedDoc) {
      return res.status(404).json({ error: "Document not found" });
    }

    res.json({ message: "Document deleted successfully" });
  } catch (error) {
    console.error("Error deleting document:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
