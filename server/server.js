import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err);
    });

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: true, credentials: true}));

// Routes
import authRouter from "./routes/authRoute.js";
import noteRouter from "./routes/noteRoute.js";

app.use("/api/auth", authRouter);
app.use("/api/note", noteRouter);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);  // Log the full error stack for debugging
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
