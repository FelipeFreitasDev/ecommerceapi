const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const bannerRoute = require("./routes/banner");
const orderRoute = require("./routes/order");
const categoriesRoute = require("./routes/categories");
const cors = require("cors");
app.use(cors());

dotenv.config();

mongoose
.connect(process.env.MONGO_URL)
    .then(() =>console.log("DB Connection Successfull!"))
    .catch((err) => {
        console.log(err)
    });

    app.use(express.json());
  app.use("/api/users", userRoute);
  app.use("/api/auth", authRoute);
 app.use("/api/products", productRoute);
 app.use("/api/categories", categoriesRoute);
 app.use("/api/banners", bannerRoute);
  app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running");
});