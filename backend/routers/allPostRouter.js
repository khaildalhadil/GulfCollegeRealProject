import e from "express";
import { getAllPost } from "../controllers/action.js";

const router = e.Router();

router
  .route('/')
  .get(getAllPost)

export default router;