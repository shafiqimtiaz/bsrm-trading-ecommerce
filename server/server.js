require("dotenv/config");
const app = require("./app");
const mongoose = require("mongoose");

mongoose
	.connect(process.env.MONGODB_URL_LOCAL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => console.log("Connected to MongoDB !!"))
	.catch((err) => console.error("MongoDB connection failed !!"));

const port = process.env.PORT || 3001;

app.listen(port, () => {
	console.log(`Server running on port: ${port} !!`);
});
