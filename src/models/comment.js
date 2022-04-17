import { randomUUID } from 'crypto';

export default class Comment{
    // Private properties.
    #id = '';
    #user = null;
    #date = null;
    #message = '';
    #userVotes = [];

    // Constructor.
    constructor(message = '', user = null){
        this.#user = user;
        this.#date = Date.now(); // Generate comment date.
        this.#message = message;
        this.#id = randomUUID(); // Generate comment id.
    }

    // Set the comment author.
    set user(user){
        this.#user = user;
    }
    
    // Set the comment message.
    set message(message){
        this.#message = message;
    }

    // Return the comment id.
    get id(){
        return this.#id;
    }

    // Return the comment author.
    get user(){
        return this.#user;
    }
    
    // Return the comment date.
    get date(){
        return this.#date;
    }

    // Return the comment message.
    get message(){
        return this.#message;
    }

    // Add or remove the user vote.
    upVote(username){
        // Check if the user has voted.
        if(this.#userVotes.includes(username)){
            // Remove user vote.
            this.#userVotes.splice(this.#userVotes.indexOf(username), 1);
            return;
        }

        // Add user vote.
        this.#userVotes.push(username);
    }

    // Return the votes count.
    getVotes(){
        return this.#userVotes.length;
    }
}