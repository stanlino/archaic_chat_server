"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const cors_1 = __importDefault(require("cors"));
require("./shared/container");
const routes_1 = require("./routes");
const events_1 = require("./events");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server);
app.use(routes_1.router);
const onConnection = (socket) => {
    console.log('New socket => ', socket.id);
    (0, events_1.eventsController)(socket);
};
io.on('connection', onConnection);
server.listen(process.env.PORT || 3000, () => {
    console.log('listening on http://localhost:3000');
});
