import { Hono } from "hono";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";
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

app.post("/profile", async (c) => {
    //login to create a new profile 
    const body = await c.req.json();
    console.log('input of profile', body);
    console.log('body.password(original)', body.password);
    
    //encode password
    const passwordHash = await bcrypt.hash(body.password, 18);
    console.log('hash.password(after)', passwordHash);
    //save to db 
    //output response 
    return c.json({
        message: "create profile completed"
    });
});
export default app; 