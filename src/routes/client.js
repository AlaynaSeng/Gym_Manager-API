const { Router } = require("express");
const client = require("../models/client");

const router = Router();

router.get("/", async (req, res) => {
  res.json(await client.find());
});

router.post("/", async (req, res) => {
  res.json(await client.create(req.body));
});

router.delete("/:id", async (req, res) => {
  await client.deleteOne({ id: req.params.id });
  res.end();
});

router.put("/:id", async (req, res) => {
  res.json(
    await client.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
  );
});

module.exports = router;