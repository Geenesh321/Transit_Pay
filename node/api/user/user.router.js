require("dotenv").config()
const {getUsers,register, login} = require("./user.controller");
const router = require('express').Router();

router.get("/api/users",getUsers);
router.post("/api/user",register);
router.post("/api/login", login)
module.exports = router;