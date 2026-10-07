const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
// const contactRoutes = require("./routes/contactRoutes");
// const distributorRoutes = require("./routes/distributorRoutes");
// const superStockistRoutes = require("./routes/superstockistRoutes");
// const dealerRoutes = require("./routes/delarRoutes");

// Use routes
// app.use("/api/contact", contactRoutes);
// app.use("/api/distributor", distributorRoutes);
// app.use("/api/super-stockist", superStockistRoutes);
// app.use("/api/dealer", dealerRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({
    success: false,
    message: "Internal server error",
    error: err.message
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📝 Contact API: http://localhost:${PORT}/api/contact`);
  console.log(`📝 Distributor API: http://localhost:${PORT}/api/distributor`);
  console.log(`📝 Super Stockist API: http://localhost:${PORT}/api/super-stockist`);
  console.log(`📝 Dealer API: http://localhost:${PORT}/api/dealer`);
});