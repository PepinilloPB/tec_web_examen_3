import {Request, Response} from 'express';

class IndexController{
    public index (req: Request, res: Response) { 
        res.send('Hello, Index');
    }
}

export const indexController = new IndexController();