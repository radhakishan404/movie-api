"use strict";

import express from "express";
import cors from "cors";
import allRoutes from "./src/routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", allRoutes);

app.use("/test", (req, res) => {
    res.send("working");
})

// handle error here
app.use((error, req, res, next) => {
    if (!error) {
        return next();
    }
    res.send(error.message);
})

app.listen(3001, () => {
    console.log("Server running on port 3001");
})