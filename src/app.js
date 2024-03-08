const express = require("express");
const corsMiddleware = require("./middleware/cors");
const app = express();

const connectDB = require("./config/database");
connectDB();

app.use(express.json());
app.use(express.static("public"));
app.use(corsMiddleware);

const drugRoutes = require("./routes/drugRoutes");
const pharmacyRoutes = require("./routes/pharmacyRoutes");
const orderRoutes = require("./routes/orderRoutes");
app.use("/api/drugs", drugRoutes);
app.use("/api/pharmacies", pharmacyRoutes);
app.use("/api/order", orderRoutes);

module.exports = app;
