import express from "express";
import cors from "cors";
import connectdb from './config/db.js';
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import passwordResetRoutes from "./routes/passwordReset.js";
import ProductRoutes from "./routes/product.js";
import * as dotenv from 'dotenv'; 
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors());

connectdb();
app.listen(process.env.PORT || 8080, function(){
    console.log("➡️ InventoryApp listening on port %d in %s mode 👍", this.address().port, app.settings.env);
});

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/password-reset", passwordResetRoutes);
app.use("/api/product", ProductRoutes)

app.get("/wake/api", (req, res) => {
    res.status(200).json({ success: true, message: "API is awake" });
});

app.get("*", (req, res) => {
    res.status(404).json({ success: false, message: "Page not found 404", endPoints: {
        "login": "/api/auth/login",
        "register": "/api/auth/register",
        "forgot-password": "/api/password-reset/forgot-password",
        "reset-password": "/api/password-reset/reset-password",
        "get-all-users": "/api/users",
        "get-user-by-id": "/api/users/:id",
        "update-user-by-id": "/api/users/:id",
        "delete-user-by-id": "/api/users/:id",
        "get-all-products": "/api/product",
        "get-product-by-id": "/api/product/:id",
        "update-product-by-id": "/api/product/:id",
        "delete-product-by-id": "/api/product/:id",
        "create-product": "/api/product",
    } });
});

