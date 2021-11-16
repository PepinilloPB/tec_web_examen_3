import {Request, Response} from 'express';
import gamesRoutes from '../routes/gamesRoutes';

const games: any[] = [];

class CartController{
    
    //games: String[] = [];

    public async listCart (req: Request, res: Response): Promise<void>{ 
        res.json(games);
        //res.send('Hello, Index');
    }

    public async saveInCart (req: Request, res: Response): Promise<void> { 
        games.push(req.body);
        res.json({message: 'Game saved'});
    }

    public async removeFromCart(req: Request, res: Response): Promise<void> { 
        var index = games.findIndex(game => game.id == req.params.id);

        //console.log("Index: " + index);
        //console.log("ID: " + req.params.id);
        //res.send(games[index]);
        if (index > -1) {
            games.splice(index, 1);
            res.json({message: 'Game deleted'});
        } else {
            res.sendStatus(404);
        }
    }
}

export const cartController = new CartController();