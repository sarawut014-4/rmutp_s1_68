import { Hono } from "hono";
import { PrismaClient } from "@prisma/client";
//import { PrismaClient } from "../generated/prisma/Client";

const prisma = new PrismaClient();

const app = new Hono();
 app.get("/", (C) => C.text("hello, world"));
 app.get("/about", (C) => {
    return C.json({
        message: "ศราวุฒิ วงศ์มณี"
    });
 });
 app.get("/profile", async (c) => {
     //logic
     const profile = await prisma.profile.findMany();
     return c.json(profile);
 });

export default app; 