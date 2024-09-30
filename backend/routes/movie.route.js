import express from "express";
import { 
  getMovieDetails, 
  getMoviesByCategory, 
  getMovieTrailers, 
  getSmilarMovies, 
  getTrendingMovie 
} from "../controllers/movie.controller.js";

const router = express.Router();

router.get("/trending", getTrendingMovie);
router.get("/:id/trailers", getMovieTrailers);
router.get("/:id/details", getMovieDetails);
router.get("/:id/similar", getSmilarMovies);
router.get("/:category", getMoviesByCategory);

export default router;