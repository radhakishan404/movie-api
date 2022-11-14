import express from "express";

const app = express();

import movieRoutes from "../src/features/movie/movie.routes.js";

app.use("/", movieRoutes);

export default app;