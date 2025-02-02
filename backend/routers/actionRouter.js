import e from "express";
import { createPost } from "../controllers/action.js";

const router = e.Router();

router
  .route('/')
  .post(createPost)



export default router;