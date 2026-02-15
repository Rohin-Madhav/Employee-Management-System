const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const employeRoute = require("./routes/employeRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); 

      const allowedOrigins = [
        "http://localhost:5173",
        "https://manage-employeeee.netlify.app",
      ];

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);



app.use("/auth", authRoutes);
app.use("/employe", employeRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running:${PORT}`);
});
