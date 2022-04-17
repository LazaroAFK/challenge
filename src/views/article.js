export default class Article{
    // Private properties.
    #manager = null;

    // Constructor.
    constructor(manager = null){
        this.#manager = manager;
    }
    
    // Assign presenter.
    registerWith(manager){
        this.#manager = manager;
    } 

    // Create new comment.
    registerComment(message){
        this.#manager.registerComment(message);
    }

    // Return n comments.
    displayComments(numberOfComments){
        return this.#manager.getComments(numberOfComments);
    }

    // Add or remove the user vote.
    upVoteComment(commentId){
        this.#manager.upVoteComment(commentId);
    }
}