const User = require("./user.model");

const userRegistration = async (req, res) => {
	try {
		const { username, email, password } = req.body;

		const user = new User({ username, email, password });
		await user.save();
		res.status(201).json({ message: "User Registered Successfully" });
	} catch (error) {
		res.status(500).json({ message: "Registration Failed" });
	}
};

module.exports = {
	userRegistration,
};
