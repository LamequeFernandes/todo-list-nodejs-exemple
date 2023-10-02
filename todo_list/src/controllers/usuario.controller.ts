import { Response, Request } from "express";

export async function teste(req: Request, res: Response) {
    res.status(200).json({msg: "testando"})
}


export async function teste2(req: Request, res: Response) {
    res.status(200).json({msg: "teste 2"})
}
