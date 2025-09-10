const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

// connect to MongoDB
async function main() {
    await mongoose.connect(process.env.DB_URL);
}
main()
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`Shoporiax is running on port ${port}`);
});
