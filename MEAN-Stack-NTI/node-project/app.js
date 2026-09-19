const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
const { isLoggedIn, isAdmin } = require('./middlewares/authMiddleware');

const app = express();

// Enable CORS & JSON Body Parser
app.use(cors());
app.use(express.json());

// DB Connection
mongoose.connect('mongodb://127.0.0.1:27017/FacultySystemV2')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log('DB Error: ', err));

// Routes
app.use('/api/auth', authRoutes);
// Protected route example (using Authorization task)
app.use('/api/users', isLoggedIn, isAdmin, userRoutes);

// Custom Middlewares for Error Handling
app.use(notFound);
app.use(errorHandler);

// Start Server
app.listen(3000, () => {
    console.log('Server is running on port 3000...');
});