export default class Article{
    #manager = null;

    constructor(manager = null){
        this.#manager = manager;
    }
    
    registerWith(manager){
        this.#manager = manager;
    } 

    registerComment(message){
        this.#manager.registerComment(message);
    }

    displayComments(numberOfComments){
        return this.#manager.getComments(numberOfComments);
    }

    upVoteComment(commentId){
        this.#manager.upVoteComment(commentId);
    }
}