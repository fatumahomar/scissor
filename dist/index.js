"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("./config/mongoose"));
(0, mongoose_1.default)();
const port = 8000;
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, "./views"));
app.use(express_1.default.static('./assets'));
app.use('/', routes_1.default);
app.listen(port, (error) => {
    if (error)
        console.log('Error express:', error);
    console.log('server is running on port:', port);
});
