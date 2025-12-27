import cookieParser from "cookie-parser";
import express from "express";
import authRouter from "./routes/authRoutes.js"
import userRouter from "./routes/userRoutes.js";
import cors from "cors"

const app = express();

const allowedOrigins = ['http://localhost:5173']

app.use(express.json({ limit: "16kb" }))

app.use(express.urlencoded({ limit: "16kb" }))

app.use(express.static("public"));

app.use(cookieParser());

app.use(cors({ origin: allowedOrigins, credentials: true}))

app.get('/', (req, res) => {
    res.send("API Working")
})

app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

export { app };
