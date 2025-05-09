
/*

As we know express has been written in javascript, so just importing it in any typescript project gives error:
 "could not find declaration file for module 'express'."

So the ugly way of getting rid of the error is just writing a comment line // @ts-ignore.

But this is not a good practice as it will make your code less maintainable. So instead w need to install @types/express package. to use express in typescript.

After installing express, we need to install @types/express as well.


We can manually write the declaration file for express in our project. But it is already written in @types/express package. So we just install @types/express package.

.d.ts file is the declaration file for any module.

declare module "express" {
    export function Router(): void;
}


*/

import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";
import { z } from "zod";
import { UserModel } from "./db";

const app = express();
app.use(express.json());

const signupSchema = z.object({
    userName: z.string().min(3, "Username must be at least 3 characters"),
    password: z.string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
        "Password must include uppercase, lowercase, number, and special character"
      ),
  });
  
// ✅ Signup route with Zod and password hashing
app.post("/api/v1/signup", async (req, res) => {
    try {
      const validatedData = signupSchema.parse(req.body);
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(validatedData.password, 10);
  
      // Save user
      const newUser = new UserModel({
        userName: validatedData.userName,
        password: hashedPassword,
      });
  
      await newUser.save();
  
      res.status(201).json({ message: "User signed up successfully" });
    } catch (error: any) {
      if (error.name === "ZodError") {
        return res.status(400).json({ error: error.errors });
      }
      res.status(500).json({ error: "Server error" });
    }
  });


app.post('/api/v1/signin', (req, res) => {
   
})

app.post('/api/v1/content', (req, res) => {
   
})

app.post('/api/v1/content', (req, res) => {
   
})
app.post('/api/v1/brain/share', (req, res) => {
   
})

app.post('/api/v1/brain/:shareLink', (req, res) => {
   
})