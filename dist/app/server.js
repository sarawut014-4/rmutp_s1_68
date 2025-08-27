"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_server_1 = require("@hono/node-server");
var index_1 = require("./index");
(0, node_server_1.serve)(index_1.default, function (info) {
    console.log("Server is running on ".concat(info.port));
});
//# sourceMappingURL=server.js.map