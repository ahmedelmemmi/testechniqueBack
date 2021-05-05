import express, { Router } from 'express';
import post from '../controllers/postsController';
import extractJWT from '../middleware/extractJWT'

const router= express.Router();

router.post('/post/create',extractJWT, post.createPost)
router.put('/post/update/:id',extractJWT, post.updatePost)
router.delete('/post/delete/:id',extractJWT, post.deletePost)
router.get('/post/getAll',extractJWT, post.getAllPostss)


export = router;


