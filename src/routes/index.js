
const { Router } = require("express");
const clients = require("./clients");
const groups = require("./groups");
const instructors = require("./instructors");

const router = Router();

router.use("/clients", clients);
router.use("/instructors", instructors);
router.use("/groups", groups);

module.exports = router;