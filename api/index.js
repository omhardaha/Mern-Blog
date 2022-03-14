const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postRoute = require("./routes/post");
const categoryRoute = require("./routes/category");

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
app.use("/api/users", usersRoute);
app.use("/api/post", postRoute);
app.use("/api/category", categoryRoute);

app.listen("5000", () => {
	console.log("server is Running");
});
