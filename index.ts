import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

const port: string | number = process.env.PORT || 3000;
const app: Application = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/", (req: Request, res: Response) => {
    console.log(req);

    res.json({
        "ok": true
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});