// Import of models.
import User from '../models/user.js';
import Comment from '../models/comment.js';
import Discussion from '../models/discussion.js';

import {commentToObject} from '../functions/helpers.js'


export default class Manager{
    // Private properties for Views.
    #view = null;

    // Private properties for Models.
    #discutionModel = null;

    // Private properties for User.
    #user = null;

    // Contructor.
    constructor(view = null){
        this.#view = view;

        // Simple user and discussion assign.
        this.#user = new User('Lázaro Contreras', 'lazaro-co');
        this.#discutionModel = new Discussion();
    }

    // Set the view.
    setView(view){
        this.#view = view;
    }

    // Register a comment.
    registerComment(message){
        let comment = new Comment(message, this.#user);
        this.#discutionModel.addComment(comment);
    }

    // Returns n comments.
    getComments(numberOfComments){
        return commentToObject(this.#discutionModel.getComments(numberOfComments));
    }

    // Add or remove the user vote.
    upVoteComment(commentId){
        let comment = this.#discutionModel.getCommentById(commentId);
        comment.upVote(this.#user.username);
    }
}