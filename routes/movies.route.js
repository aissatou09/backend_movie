import express from "express";
import { createMovie ,getMovies ,getMovieById ,updateMovie ,deleteMovie } from "../services/movies.service.js";
const router = express.Router();

router.route("/create").post(createMovie)
router.route("/").get(getMovies)
router.route("/:id").get(getMovieById)
router.route("/update/:id").put(updateMovie)
router.route("/delete/:id").delete(deleteMovie)
export default router