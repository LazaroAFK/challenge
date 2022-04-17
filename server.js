import cors from 'cors';
import express from 'express';

import Article from './src/views/article.js';
import Manager from './src/presenter/manager.js';

const app = express();
const port = 3000;

const presenter = new Manager();
const articleView = new Article();

app.use(cors({
    origin: '*'
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/new/comment', (req, res) => {
    const message = req.body.message;

    articleView.registerComment(message);
    res.json({result: 'commented'});
})

app.post('/comment/upvote', (req, res) => {
    const commentId = req.body.commentId;

    articleView.upVoteComment(commentId);
    res.json({result: 'voted'});
});

app.get('/comments/all', (req, res) => {
    res.json(articleView.displayComments(0));
});

app.get('/comments/:numberOfComments', (req, res) => {
    res.json(articleView.displayComments(req.params.numberOfComments));
});

app.listen(port, () => {
    presenter.setView(articleView);
    articleView.registerWith(presenter);
    console.log(`App ready on port ${port}.`);
});