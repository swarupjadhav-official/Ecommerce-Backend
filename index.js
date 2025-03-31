const express = require("express");
const mongoose = require("mongoose");

// Update paths to include the 'Models' folder
const productRoutes = require("./Models/Product");
const signupRoutes = require("./Models/Signup");
const signinRoutes = require("./Models/Signin");

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb+srv://swarupjadhav2005:b3YAv3tzVQJ2SuuD@ecommerce.rqyeane.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Routes
app.use("/api/products", productRoutes);
app.use("/api/auth", signupRoutes);
app.use("/api/auth", signinRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
