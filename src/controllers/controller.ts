import { Request, Response } from 'express';

export default {
    index(req: Request, res: Response) {
        res.status(200).json({ response: "success" });
    }
}