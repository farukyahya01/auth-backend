const { Router } = require("express");
const router = Router();

const Controller = require("../controllers/user.controller");

router.post("/login", Controller.login);
router.post("/register", Controller.register);

module.exports = router;