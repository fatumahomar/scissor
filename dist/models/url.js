"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const linkSchema = new mongoose_1.Schema({
    url: { type: String, required: true },
    shortUrl: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    lastUsed: { type: Date, default: null },
    totalHits: { type: Number, default: 0 },
    qrCodeId: { type: String, default: null },
    customDomain: { type: String, default: null },
    origin: { type: [String] }
});
const LinkModel = (0, mongoose_1.model)('Link', linkSchema);
exports.default = LinkModel;
