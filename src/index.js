require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const pathLog = require("./middleware/logs");
const blogRoutes = require("./routes/blog");
const multer = require("multer");

app.listen(PORT, () => {
  console.log(`Server listening to ${PORT}`);
});
app.use(express.json());
app.use(pathLog);

app.use("/assets/images", express.static("public/images"));

app.use("/blog", blogRoutes);

// Error handling
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // Multer-specific error
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        error: "Multer Error",
        message: "File size exceeds the allowed limit.",
      });
    }
    return res.status(400).json({
      error: "Multer Error",
      message: err.message,
    });
  } else {
    // Other errors
    res.status(500).json({
      error: "Server Error",
      message: err.message,
    });
  }
});
