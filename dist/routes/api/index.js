"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const shorten_1 = require("../../controllers/api/shorten");
router.post("/shorten", shorten_1.shorten);
router.post("/populate", shorten_1.populate);
router.get("/", shorten_1.base);
exports.default = router;
