import express, { Router } from 'express';
import postsController from '../controllers/postsController';
import extractJWT from '../middleware/extractJWT'

class PostRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/',extractJWT, postsController.list);
        this.router.get('/:id',extractJWT, postsController.getOne);
        this.router.post('/',extractJWT, postsController.create);
        this.router.put('/:id',extractJWT, postsController.update);
        this.router.delete('/:id',extractJWT, postsController.delete);
    }

}

export default new PostRoutes().router;

