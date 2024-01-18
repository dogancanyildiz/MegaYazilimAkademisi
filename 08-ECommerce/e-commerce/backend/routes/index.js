// create a routes.js file in the root of the server folder

const express = require("express");
const router = express.Router();
const User = require("./models/User");
const uuid = require("uuid"); 

router.get("/", (req, res) => {
    res.send("Hello World!");
});

router.post("/addToCart", async (req, res) => {
    const { email, product } = req.body;
    const userData = await User.findOne({ email });
    console.log(req.body)
    if (!userData) {
        res.status(401).send({ message: "Invalid email", success: false });
    } else {
        //const { email, cart } = userData;
        await User.findOneAndUpdate({ email }, { $push: { product } }, {upsert: true});
        res.status(200).send({product, email, success: true});
    } 
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const userData = await User.findOne({ email });
    if (!userData) {
        res.status(401).send({ message: "Invalid email", success: false });
    } else if (password !== userData.password) {
        res.status(401).send({ message: "Invalid password", success: false });
    } else {
        const { email, username } = userData;
        res.status(200).send({username, email, success: true});
    }
});


router.post("/register", async (req, res) => {
    const { email, username, password } = req.body;
    console.log(req.body);

    const userData = await User.findOne({ email });
    
    if (userData?.email === email) {
        res.status(401).send({ message: "User already exists", success: false});
    } else {
        const id = uuid.v4();
        const newUser = new User({ id, email, username, password });
        await newUser.save();
        res.status(200).send({ email, username, success: true });
    }
});

module.exports = router;
