import express from "express";

import multer from "multer";
import multerConfig from "./config/multer";

import MovieController from "./controllers/MovieController";

const routes = express.Router();
const upload = multer(multerConfig);

routes.post("/movies", upload.single("image"), MovieController.create);
routes.get("/movies", MovieController.index);
routes.get("/movies/:id", MovieController.show);

export default routes;
