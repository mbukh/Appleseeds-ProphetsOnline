const Post = require("../Model/Post");
const Comment = require("../Model/Comment");

const addPost = ("Add new post", (req, res, next) => {
    try {
        const post = new Post(req.body);
        post.save();
        res.status(201).json({ messag: "Created Done" });

    }
    catch (error) {
        res.status(400);
        next(err);
    }
});

const updatePost = ("add new post", (req, res) => { });

const getPost = ("Get an Comment", async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            res.status(404).json({ error: "post Not Found" });
            return;
        }
        console.log(post);

        res.status(200).json({ post: post })
    } catch (error) {
        res.status(404);
        next(err);
    }
});

const deletePost = ("add new post", (req, res) => { });

const getPosts = ("Get All Comments", async (req, res, next) => {
    try {
        const post = await Post.find();
        if (!post) {
            res.status(404).json({ error: "post Not Found" });
            return;
        }
        res.status(200).json({ post: post })
    } catch (error) {
        res.status(500);
        next(err);
    }
});

const getAllCommentsForPosts = ("Get All Comments For One Post", (req, res, next) => {
    const query = Comment.find({ postId: req.params.id });
    // const posts = Post.fliter((post)=>post.authorId === req.params.id);
    query.exec()
        .then(comments => {
            res.send(comments);
        })
        .catch(err => {
            console.log(err);
            next();
        });
});


module.exports = { addPost, updatePost, getPost, deletePost, getPosts,getAllCommentsForPosts };
