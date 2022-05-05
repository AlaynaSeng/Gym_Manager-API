const { Router } = require("express");
const group = require("../models/group");
const router = Router();

router.get("/", async (req, res) => {
  res.json(await group.find());
});

router.post("/", async (req, res) => {
  res.json(await group.create(req.body));
});

router.delete("/delete/:id", async (req, res) => {
  await group.deleteOne({ _id: req.params.id });
  res.end();
});

router.put("/update/:id", async (req, res) => {
  console.log(req.body)
  res.json(
    await group.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
  );
});

module.exports = router;