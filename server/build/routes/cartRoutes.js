"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cartController_1 = require("../controllers/cartController");
class CartRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //this.router.get('/', (req, res) => res.send('Hello, Games'));
        //this.router.use(express.json());
        this.router.get('/', cartController_1.cartController.listCart);
        this.router.post('/', cartController_1.cartController.saveInCart);
        this.router.delete('/:id', cartController_1.cartController.removeFromCart);
    }
}
const cartRoutes = new CartRoutes();
exports.default = cartRoutes.router;
