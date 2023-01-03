require("express-async-errors");
const express = require("express");
const compression = require("compression");
const cors = require("cors");
const error = require("./middlewares/error");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

require("./middlewares/routes")(app);
app.use(error);
app.use(compression);

module.exports = app;
