"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.base = exports.populate = exports.shorten = void 0;
const url_1 = __importDefault(require("../../models/url"));
const utils_1 = require("../../utils");
const shorten = async function (req, res) {
    try {
        const { url, customDomain, userId } = req.body;
        // Validate inputs
        const urlValidity = await (0, utils_1.validateUrl)(url);
        if (!url || typeof url !== "string" || !urlValidity) {
            return res.status(400).json({ error: "Invalid or missing 'url' field" });
        }
        if (customDomain && typeof customDomain !== "string") {
            return res.status(400).json({ error: "Invalid 'customDomain' field" });
        }
        if (!userId || typeof userId !== "string") {
            return res
                .status(400)
                .json({ error: "Invalid or missing 'userId' field" });
        }
        const shortUrl = (0, utils_1.randomizeString)(customDomain, req.get("host"));
        await url_1.default.create({
            url,
            customDomain,
            userId,
            shortUrl,
        });
        let data = await url_1.default.find({ userId }).sort({ createdAt: -1 });
        return res.status(200).json({ data: data });
    }
    catch (err) {
        if (err.code === 11000) {
            // Duplicate key error
            console.log(err);
            return res
                .status(400)
                .json({ error: "Some error occurred, possible duplicate data" });
        }
        console.error("Some error occurred:", err);
        return res.status(500).json({
            error: "Invalid or missing 'url' field",
        });
    }
};
exports.shorten = shorten;
const populate = async function (req, res) {
    try {
        const { userId } = req.body;
        // Validate inputs
        if (!userId || typeof userId !== "string") {
            return res
                .status(400)
                .json({ error: "Invalid or missing 'userId' field" });
        }
        let data = await url_1.default.find({ userId }).sort({ createdAt: -1 });
        return res.status(200).json({ data: data });
    }
    catch (err) {
        console.error("Some error occurred:", err);
        return res.status(500).json({
            error: "Invalid or missing 'url' field",
        });
    }
};
exports.populate = populate;
const base = async function (_req, res) {
    try {
        return res.status(200).json({
            message: "Welcome to the scissor API",
            endpoints: {
                "/api/shorten": {
                    description: "Shortens a url",
                    method: "POST",
                },
                "/api/populate": {
                    description: "Populate data for the user",
                    method: "POST",
                }
            }
        });
    }
    catch (err) {
        console.error("Some error occurred:", err);
        return res.status(500).json({
            error: "Invalid or missing 'url' field",
        });
    }
};
exports.base = base;
