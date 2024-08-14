"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const users_1 = __importDefault(require("../models/users"));
const create = async function (req, res) {
    try {
        await users_1.default.create({
            userid: req.body.userid,
            password: req.body.password,
        });
        // console.log(user);
        res.redirect("/users/signin");
    }
    catch (err) {
        if (err instanceof Error && "code" in err && err.code === 11000) {
            // Duplicate key error
            console.error("Duplicate user ID:", err.keyValue.userid);
            res.status(400).send("User ID already exists");
        }
        else {
            console.error("Error in creating new user:", err);
            res.status(500).send("Internal Server Error");
        }
    }
};
exports.create = create;
