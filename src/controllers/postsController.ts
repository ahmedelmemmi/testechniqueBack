import { Request, Response } from 'express';


import pool from '../database';

class PostsController {

    public async list(req: Request, res: Response): Promise<void> {
        const posts = await pool.query('SELECT * FROM posts');
        res.json(posts);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const posts = await pool.query('SELECT * FROM posts WHERE id = ?', [id]);
        console.log(posts.length);
        if (posts.length > 0) {
            return res.json(posts[0]);
        }
        res.status(404).json({ text: "The game doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO posts set ?', [req.body]);
        res.json({ message: 'Post Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldPost = req.body;
        await pool.query('UPDATE posts set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "The post was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM posts WHERE id = ?', [id]);
        res.json({ message: "The post was deleted" });
    }
}

const postsController = new PostsController;
export default postsController;