import express, { Application, Request, Response } from "express";
import configObj from "./config";

const port: string | number | undefined = configObj.port;
const app: Application = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/", (req: Request, res: Response) => {
    console.log("BODY", req.body);

    res.json({
        "ok": true
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});