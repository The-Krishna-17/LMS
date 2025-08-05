import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoutes.js'
import cookieParser from "cookie-parser";
import verifyToken from "./middleware/authMiddleware.js";
import authorizeRole from "./middleware/authorizeMiddleware.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser())

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`The server is running at port ${PORT}`);
  });
});


app.use('/api', authRoutes)

app.get('/api/student/dashboard', verifyToken, authorizeRole('student'), (req, res) => {
    res.send('Dashboard')
})
