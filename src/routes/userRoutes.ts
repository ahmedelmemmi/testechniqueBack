import express, { Router } from 'express';
import user from '../controllers/user';
import extractJWT from '../middleware/extractJWT'

class UserRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/validate', user.validateToken);
        this.router.post('/register' ,user.register);
        this.router.post('/login', user.login);
        this.router.get('/get/all',extractJWT, user.getAllUsers);
        this.router.get('/get/:username',extractJWT, user.getOne);

    }

}

export default new UserRoutes().router;