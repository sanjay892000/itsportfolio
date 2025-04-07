const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next(); // User is logged in
    }
    res.status(401).json({ message: "Unauthorized" });
}

module.exports = isLoggedIn;