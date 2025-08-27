"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hono_1 = require("hono");
var app = new hono_1.Hono();
app.get("/", function (C) { return C.text("hello, world"); });
app.get("/about", function (C) {
    return C.json({
        message: "ศราวุฒิ วงศ์มณี"
    });
});
exports.default = app;
//# sourceMappingURL=index.js.map