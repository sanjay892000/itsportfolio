const isLoggedIn = (req, res, next) => {
    console.log(req.isAuthenticated())
    if (req.isAuthenticated()) {
        return next(); // User is logged in
    }
    res.status(401).json({
        success: false,
        message: "User Not authenticated",
    });
}

module.exports = isLoggedIn;