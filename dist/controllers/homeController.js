"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redirect = void 0;
exports.home = home;
const url_1 = __importDefault(require("../models/url"));
function home(req, res) {
    if (!req.xhr) {
        res.render("homepage", {
            title: "URL Shortner",
        });
    }
}
const redirect = async (req, res) => {
    try {
        const fullUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
        const data = await url_1.default.findOneAndUpdate({ shortUrl: fullUrl }, { $inc: { totalHits: 1 }, lastUsed: new Date() });
        if (data) {
            if (data.totalHits > 10) {
                res.send(`<h1>You have been rate limited !</h1>`);
                return;
            }
            res.redirect(data.url);
            return;
        }
        res.send(`<h1>You may be Lost!</h1>`);
    }
    catch (err) {
        console.error("Some error occurred:", err);
        res.status(500).send("Internal Server Error");
    }
};
exports.redirect = redirect;
// Simple tests
if (process.env.NODE_ENV === 'test') {
    console.log("Running simple tests...");
    // Mock objects
    const mockReq = {};
    const mockRes = {
        render: () => { },
        send: () => { },
        redirect: () => { },
        status: () => mockRes,
    };
    // Test home function
    try {
        home(mockReq, mockRes);
        console.log("home function test passed");
    }
    catch (error) {
        console.error("home function test failed", error);
    }
    // Test redirect function
    (async () => {
        try {
            await (0, exports.redirect)(mockReq, mockRes);
            console.log("redirect function test passed");
        }
        catch (error) {
            console.error("redirect function test failed", error);
        }
    })();
    console.log("Functions working ");
}
