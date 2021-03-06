import {Request, Response} from 'express';
import pool from '../database';

class GamesController{
    public async list (req: Request, res: Response) { 
        const games = await pool.query('SELECT * FROM game');
        res.json(games);
    }
    public async getOne (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM game WHERE id = ?', [id]);
        if(games.length > 0){
            return res.json(games[0]);
        }
        res.status(404).json({ text: 'Game not found' });
    }
    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO game SET ?', [req.body]);
        console.log(req.body);
        res.json({message: 'Game saved'});
    }
    public async update (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('UPDATE game SET ? WHERE id = ?', [req.body, id]);
        res.json({message: 'Game updated'});
    }
    public async delete (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM game WHERE id = ?', [id]);
        res.json({message: 'Game deleted'});
    }
}

export const gamesController = new GamesController();