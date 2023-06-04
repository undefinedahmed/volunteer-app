const router = require("express").Router();

router.get("/hello-world", (req, res) => {
  try {
    res.status(200).json({ message: "Hello World From Volunteer App!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Something went wrong!" });
  }
});

module.exports = router;
