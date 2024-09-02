import express from "express";
const app = express();

app.use(express.urlencoded({ extend: false }));
app.use(express.json());

export { app };
