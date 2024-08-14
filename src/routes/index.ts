import express from 'express';
const router = express.Router();
import { home,redirect} from "../controllers/homeController";
import apiRouter from "./api";
router.get("/", home);
router.use("/api",apiRouter);
router.use('*', redirect);

export default router;
