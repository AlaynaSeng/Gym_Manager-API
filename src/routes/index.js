
const { Router } = require("express");
const clients = require("./client");
const groups = require("./group");
const instructors = require("./instructor");

const router = Router();

router.use("/client", clients);
router.use("/instructor", instructors);
router.use("/group", groups);

module.exports = router;