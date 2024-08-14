import express from 'express';
const router = express.Router();
import {shorten,populate,base} from "../../controllers/api/shorten";
router.post("/shorten",shorten);
router.post("/populate",populate);
router.get("/",base);

export default router;