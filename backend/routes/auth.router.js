const express = require("express");
const passport = require("passport");
const userModel = require("../schema/user.model");
const router = express.Router();
const isVerifyUser = require('../middleware/isLoggedin')
const jwt = require('jsonwebtoken')
require('dotenv').config();
// Google Login
router.get("/google", passport.authenticate("google",
    {
        scope: ["profile", "email"]
    })
);
router.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/login",
    }), async (req, res) => {
        const { name, email, avatar } = req.user;
        let user = await userModel.findOne({ email: email });
        if (!user) {
            user = await userModel.create({ name, email, avatar });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.redirect(`https://sanjay892000.netlify.app/reviews/?token=${token}`);
    }
);
/* 
// GitHub Login
router.get(
    "/github",
    passport.authenticate("github", { scope: ["user:email"] })
);
router.get(
    "/github/callback",
    passport.authenticate("github", {
        successRedirect: "/",
        failureRedirect: "/login",
    })
);

// LinkedIn Login
router.get("/linkedin", passport.authenticate("linkedin"));
router.get(
    "/linkedin/callback",
    passport.authenticate("linkedin", {
        successRedirect: "/",
        failureRedirect: "/login",
    })
);

// Twitter Login
router.get("/twitter", passport.authenticate("twitter"));
router.get(
    "/twitter/callback",
    passport.authenticate("twitter", {
        successRedirect: "/",
        failureRedirect: "/login",
    })
);
 */
// Logout
router.get("/logout", (req, res) => {
    req.logout(() => {
        res.redirect("/");
    });
});

module.exports = router;
