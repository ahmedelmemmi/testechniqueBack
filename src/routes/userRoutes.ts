import express, { Router } from 'express';
import user from '../controllers/user';
import extractJWT from '../middleware/extractJWT'
const router= express.Router();

router.post('/login', user.login)
router.post('/register', user.register)
router.get('/getall', user.getAllUsers)
router.get('/getuser/:username', user.getuserbyusername)



export = router;