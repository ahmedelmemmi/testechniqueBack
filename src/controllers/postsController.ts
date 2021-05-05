import {Request, Response } from 'express';
import mongoose from 'mongoose';
import Post from '../models/postModel';

const createPost = (req: Request, res: Response) => {
    let { author, title } = req.body;

    const post = new Post({
        _id: new mongoose.Types.ObjectId(),
        author,
        title
    });

    return post
        .save()
        .then((result) => {
            return res.status(201).json({
                post: result
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};
const updatePost = (req: Request, res: Response) => {
    console.log(req.body);
    let post = Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      (err: any, post: any) => {
          console.log(post);
          
        if (err) {
          res.send(err);
          console.log("failed");
          
        } else {
          res.send("Successfully updated post!");
        }
      }
    );
  };
  export let deletePost = (req: Request, res: Response) => {
    let post = Post.deleteOne({ _id: req.params.id }, (err: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Successfully Deleted Post");
      }
    });
  };
const getAllPostss = (req: Request, res: Response) => {
    Post.find()
        .exec()
        .then((post) => {
            return res.status(200).json({
                posts: post,
                count: post.length
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

export default { createPost, getAllPostss, updatePost,deletePost };




















// import { Request, Response } from 'express';


// import pool from '../database';

// class PostsController {








//     public async list(req: Request, res: Response): Promise<void> {
//         const posts = await pool.query('SELECT * FROM posts');
//         res.json(posts);
//     }

//     public async getOne(req: Request, res: Response): Promise<any> {
//         const { id } = req.params;
//         const posts = await pool.query('SELECT * FROM posts WHERE id = ?', [id]);
//         console.log(posts.length);
//         if (posts.length > 0) {
//             return res.json(posts[0]);
//         }
//         res.status(404).json({ text: "The game doesn't exits" });
//     }

//     public async create(req: Request, res: Response): Promise<void> {
//         const result = await pool.query('INSERT INTO posts set ?', [req.body]);
//         res.json({ message: 'Post Saved' });
//     }

//     public async update(req: Request, res: Response): Promise<void> {
//         const { id } = req.params;
//         const oldPost = req.body;
//         await pool.query('UPDATE posts set ? WHERE id = ?', [req.body, id]);
//         res.json({ message: "The post was Updated" });
//     }

//     public async delete(req: Request, res: Response): Promise<void> {
//         const { id } = req.params;
//         await pool.query('DELETE FROM posts WHERE id = ?', [id]);
//         res.json({ message: "The post was deleted" });
//     }
// }

// const postsController = new PostsController;
// export default postsController;