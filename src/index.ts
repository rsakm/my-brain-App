
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

const app = express();


app.post('/api/v1/signup', (req, res) => {
   
})


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