import cors from 'cors';
import express from 'express';

import Article from './src/views/article.js';
import Manager from './src/presenter/manager.js';

const app = express();
const port = 3000;

const presenter = new Manager();
const articleView = new Article();

// Allow all the origins.
app.use(cors({
    origin: '*'
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Create new comment.
app.post('/new/comment', (req, res) => {
    const message = req.body.message;

    articleView.registerComment(message);
    res.json({result: 'commented'});
})

// Add or remove vote.
app.post('/comment/upvote', (req, res) => {
    const commentId = req.body.commentId;

    articleView.upVoteComment(commentId);
    res.json({result: 'voted'});
});

// Return all the comments.
app.get('/comments/all', (req, res) => {
    res.json(articleView.displayComments(0));
});

// Return n comments.
app.get('/comments/:numberOfComments', (req, res) => {
    res.json(articleView.displayComments(req.params.numberOfComments));
});

// Initialize server.
app.listen(port, () => {
    presenter.setView(articleView);
    articleView.registerWith(presenter);
    console.log(`App ready on port ${port}.`);
});