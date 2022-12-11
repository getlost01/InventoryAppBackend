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



