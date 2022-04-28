import { Router } from "express";
import instructor from "../models/instructor";

const router = Router();

router.get("/", async (req, res) => {
  res.json(await instructor.find());
});

router.post("/", async (req, res) => {
  res.json(await instructor.create(req.body));
});

router.delete("/:id", async (req, res) => {
  await instructor.deleteOne({ id: req.params.id });
  res.end();
});

router.put("/:id", async (req, res) => {
  res.json(
    await instructor.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
  );
});

export default router;