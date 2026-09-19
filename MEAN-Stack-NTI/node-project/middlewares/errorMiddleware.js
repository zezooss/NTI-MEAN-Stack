// Not Found Middleware
exports.notFound = (req, res, next) => {
    res.status(404).json({ message: "Route Not Found!" });
};

// Global Error Handler Middleware
exports.errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!", error: err.message });
};