// create an express app
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
// add mongoose
const mongoose = require("mongoose");
const config = require("./config");
const routes = require("./routes/index");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");


// use the express-static middleware
app.use(express.static("public"));
// no-cors
app.use(cors({
    origin: 'http://localhost:5173', // allow to server to accept request from this origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // allow session cookie from browser to pass through
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


// use express-session

app.use("/api", routes);

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected..."))
    .catch(err => console.log(err));

app.listen(port, () => console.log(`Listening on port ${port}`));