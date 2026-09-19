// Simple authentication check
exports.isLoggedIn = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: "No token provided, Unauthorized!" });
    }
    // Simulate token check
    req.user = { id: 1, role: 'admin' }; 
    next();
};

// Authorization check (Task: Only Admin can pass)
exports.isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).json({ message: "Access denied! Admins only." });
    }
};