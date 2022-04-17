import { randomUUID } from 'crypto';

export default class Discussion{
    // Private properties.
    #id = '';
    #user = '';
    #date = null;
    #comments = [];

    // Constructor.
    constructor(user = null){
        this.#user = user;
        this.#date = Date.now();
        this.#id = randomUUID();
    }

    // Set the comment author.
    set user(user){
        this.#user = user;
    }

    // Return the discussion id.
    get id(){
        return this.#id;
    }

    // Return the discussion author.
    get user(){
        return this.#user;
    }

    // Return the discussion date.
    get date(){
        return this.#date;
    }

    // Return the discussion comment by id.
    getCommentById(commentId){
        return this.#comments.find((comment) => comment.id == commentId);
    }

    // Returns n comments.
    getComments(numberOfComments = 0){
        if(numberOfComments){
            return this.#comments.slice(0, numberOfComments).reverse();
        }
        return this.#comments;
    }
    
    // Returns all comments in the discussion by user.
    getCommentsByUser(user){
        return this.#comments.filter((comment) => comment.user == user);
    }

    // Add a comment to the discussion.
    addComment(comment){
        this.#comments.push(comment);
    }
}