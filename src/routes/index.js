
const { Router } = require("express");
const clients = require("./client");
const groups = require("./group");
const instructors = require("./instructor");

const router = Router();

router.use("/clients", clients);
router.use("/instructors", instructors);
router.use("/groups", groups);

module.exports = router;