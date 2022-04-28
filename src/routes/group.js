const { Router } = require("express");
const group = require("../models/client");

const router = Router();

router.get("/", async (req, res) => {
  res.json(await group.find());
});

router.post("/", async (req, res) => {
  res.json(await group.create(req.body));
});

router.delete("/:id", async (req, res) => {
  await group.deleteOne({ id: req.params.id });
  res.end();
});

router.put("/:id", async (req, res) => {
  res.json(
    await group.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
  );
});

module.exports = router;