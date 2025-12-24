import cookieParser from "cookie-parser";
import express from "express";
import authRouter from "./routes/authRoutes.js"

const app = express();

app.use(express.json({ limit: "16kb" }))

app.use(express.urlencoded({ limit: "16kb" }))

app.use(express.static("public"));

app.use(cookieParser());

app.get('/', (req, res) => {
    res.send("API Working")
})

app.use('/api/auth', authRouter)

export { app };
