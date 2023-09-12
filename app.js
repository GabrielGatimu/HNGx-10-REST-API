import express, { json, urlencoded } from "express";
import dotenv from "dotenv";
dotenv.config();

import { notFound, errorHandler } from "./middleware/error.middleware.js";
import connectDB from "./config/db.js";
import userRoutes from "./routes/user.routes.js";

connectDB();
const app = express();

app.set("json spaces", 2);
app.use(json());
app.use(urlencoded({ extended: true }));

// -- Routes -- //
app.use("/", userRoutes);

// -- Error Middlewares -- //
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 8000;
app.listen(port, () =>
  console.log(`Server running on port ${port}. Connecting to db...`)
);
