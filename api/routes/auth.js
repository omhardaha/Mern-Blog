const router = require("express").Router();
const User = require("../models/Users");
const bcrypt = require("bcrypt");

// Register
router.post("/register", async (req, res) => {
	try {
		const salt = await bcrypt.genSalt(10);
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		const newUser = new User({
			username: req.body.username,
			email: req.body.email,
			password: hashPassword,
		});

		const user = await newUser.save();
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json(error);
	}
});
//Login
router.post("/login", async (req, res) => {
	try {

	} 
    catch (error) {
		res.status(500).json(error);
	}
});
module.exports = router;
