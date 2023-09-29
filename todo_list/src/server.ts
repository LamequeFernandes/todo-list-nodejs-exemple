import express from 'express';
import { Router, Request, Response } from 'express';

const app = express();
const route = Router();

app.use(express.json());

route.get("/", (req: Request, res: Response) => {
    res.json({msg: "Testando primeiro endpoint"});
})

route.get("/ola", (req: Request, res: Response) => {
    res.json({msg: "ola mundo"});
})

app.use(route);

app.listen(3001, () => console.log("Ola mundo!!!"));
