const Author = require("../Model/Author");
const Post = require("../Model/Post");
const AuthorModel = require("../Model/Author");

const addAuthor = ("Add new Author", (req, res, next) => {
    try {
        const author = new AuthorModel(req.body);
        author.save();
        res.status(201).json({ messag: "Created Done" });

    }
    catch (error) {
        res.status(400);
        next(err);
    }
});

const updateAuthor = ("Update an Author", (req, res) => { });

const getAuthor = ("Get an Author", async (req, res, next) => {
    try {
        const author = await Author.findById(req.params.id);
        if (!author) {
            res.status(404).json({ error: "author Not Found" });
            return;
        }
        console.log(author);

        res.status(200).json({ author: author })
    } catch (error) {
        res.status(404);
        next(err);
    }
});

const searchByName = ("", async (req, res) => {
    const name = req.query.name;
    try {
        const authors = await Author.find({ name: { $regex: name, $options: 'i' } });
        res.json(authors);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

const deleteAuthor = ("Delete an Author", (req, res) => { });

const getAuthors = ("Get All Author", async (req, res, next) => {
    try {
        const author = await Author.find();
        if (!author) {
            res.status(404).json({ error: "authors Not Found" });
            return;
        }
        res.status(200).json({ author: author })
    } catch (error) {
        res.status(500);
        next(err);
    }
});

const getAllPostsForAuthor = ("Get All Post For One Author", (req, res, next) => {
    const query = Post.find({ authorId: req.params.id });
    // const posts = Post.fliter((post)=>post.authorId === req.params.id);
    query.exec()
        .then(posts => {
            res.send(posts);
        })
        .catch(err => {
            console.log(err);
            next();
        });
});
module.exports = { addAuthor, updateAuthor, getAuthor, deleteAuthor, getAuthors, getAllPostsForAuthor, searchByName };