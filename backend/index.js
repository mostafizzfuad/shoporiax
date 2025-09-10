const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

// middleware
app.use(express.json());
app.use(
	cors({
		origin: "http://localhost:5173/",
		credentials: true,
	})
);

// routes
const userRouter = require("./src/users/user.route");
app.use("/api/auth", userRouter);

// connect to MongoDB
async function main() {
    await mongoose.connect(process.env.DB_URL);
}
main()
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.error("MongoDB connection error:", err));

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
