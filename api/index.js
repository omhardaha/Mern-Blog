const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(console.log("MongoDB Connected"))
	.catch((err) => {
		console.log("Falied To Connect", err);
	});

app.use("/api/auth", authRoute);
app.listen("5000", () => {
	console.log("server is Running");
});
