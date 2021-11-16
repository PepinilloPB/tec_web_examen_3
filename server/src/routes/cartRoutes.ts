import express, { Router } from 'express';

import { cartController } from '../controllers/cartController';

class CartRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        //this.router.get('/', (req, res) => res.send('Hello, Games'));
        //this.router.use(express.json());
        this.router.get('/', cartController.listCart);
        this.router.post('/', cartController.saveInCart);
        this.router.delete('/:id', cartController.removeFromCart);
    }
}

const cartRoutes = new CartRoutes();
export default cartRoutes.router;