import express from "express";
import { 
  getSmilarTvs, 
  getTrendingTv, 
  getTvDetails, 
  getTvsByCategory, 
  getTvTrailers 
} from "../controllers/tv.controller.js";

const router = express.Router();

router.get("/trending", getTrendingTv);
router.get("/:id/trailers", getTvTrailers);
router.get("/:id/details", getTvDetails);
router.get("/:id/similar", getSmilarTvs);
router.get("/:category", getTvsByCategory);

export default router;