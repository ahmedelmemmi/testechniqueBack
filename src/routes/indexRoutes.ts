import { Router } from 'express';

import { indexController } from '../controllers/indexController';
import extractJWT from '../middleware/extractJWT';

class IndexRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/',extractJWT, indexController.index);
    }

}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;