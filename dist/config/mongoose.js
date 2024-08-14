"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectToDatabase = async () => {
    const uri = "mongodb+srv://fatuabdi55:QPf2lSIjmvLXsw3d@cluster0.7az0xjh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    mongoose_1.default
        .connect(uri, {
        serverSelectionTimeoutMS: 30000,
    })
        .then(() => console.log("Connected to Database :: MongoDB"))
        .catch((err) => console.error("Mongoose connection error:", err));
};
exports.default = connectToDatabase;
