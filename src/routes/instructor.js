const { Router } = require("express");
const instructor = require("../models/instructor");
const router = Router();

router.get("/", async (req, res) => {
  res.json(await instructor.find());
});

router.post("/", async (req, res) => {
  res.json(await instructor.create(req.body));
});

router.delete("/delete/:id", async (req, res) => {
  await instructor.deleteOne({ _id: req.params.id });
  res.end();
});

router.put("/update/:id", async (req, res) => {
  console.log(req.body)
  res.json(
    await instructor.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
  );
  
});

module.exports = router;