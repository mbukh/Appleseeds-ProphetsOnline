const Comment = require("../Model/Comment");

const addComment = ("Add new Comment", (req, res, next) => {
    try {
        const comment = new Comment(req.body);
        comment.save();
        res.status(201).json({ messag: "Created Done" });

    }
    catch (error) {
        res.status(400);
        next(err);
    }
});

const updateComment = () => { };

const getComment = ("Get an Comment", async (req, res, next) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) {
            res.status(404).json({ error: "comment Not Found" });
            return;
        }
        console.log(comment);

        res.status(200).json({ comment: comment })
    } catch (error) {
        res.status(404);
        next(err);
    }
});

const deleteComment = () => { };

const getComments = ("Get All Comments", async (req, res, next) => {
    try {
        const comment = await Comment.find();
        if (!comment) {
            res.status(404).json({ error: "comment Not Found" });
            return;
        }
        res.status(200).json({ comment: comment })
    } catch (error) {
        res.status(500);
        next(err);
    }
});
module.exports = { addComment, updateComment, getComment, deleteComment, getComments };

