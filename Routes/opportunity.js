const Opportunity = require("../Models/Opportunity");
const router = require("express").Router();

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
router.delete("/:id", (req, res) => {
  const { id } = req.params;
});

module.exports = router;
