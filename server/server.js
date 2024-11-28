import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";


dotenv.config();

const PORT = process.env.PORT;

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to mongoDB");
}).catch((err) => {
    console.log(err);
});

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

app.listen(PORT, () => {
    console.log("Server is running on port 3000");
})


//import routes
import authRouter from "./routes/authRoute.js";
import noteRouter from "./routes/noteRoute.js";

app.use("/api/auth", authRouter);
app.use("/api/note", noteRouter);


//error handling
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal Server Error"

    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})