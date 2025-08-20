import { Hono } from "hono";

const app = new Hono();
 app.get("/", (C) => C.text("hello, world"));
 app.get("/about", (C) => {
    return C.json({
        message: "About Page"
    });
 });

export default app;