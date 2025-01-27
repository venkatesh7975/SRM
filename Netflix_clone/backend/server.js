const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const movieRoutes = require("./routes/movie");
const subscriptionRoutes = require("./routes/subscription");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

// Routes

app.use("/api/auth", authRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/subscriptions", subscriptionRoutes);

app.get("/", (req, res) => {
  res.send("Netflix Clone API");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
