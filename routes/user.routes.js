const { Router } = require("express");
const router = Router();

const Controller = require("../controllers/user.controller");

router.post("/login", Controller.login);

module.exports = router;