const { register, login, setAvtar, getAllUsers } = require("../controllers/usersController");

const router = require("express").Router();

router.post("/register", register)
router.post("/login", login)
router.post("/setAvtar/:id", setAvtar)

router.get("/allusers/:id", getAllUsers)

module.exports = router;