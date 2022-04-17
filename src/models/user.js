export default class User{
    // Private properties.
    #name = '';
    #username = '';

    // Contructor.
    constructor(name = '', username = ''){
        this.#name = name;
        this.#username = username;
    }

    // Set the name.
    set name(name){
        this.#name = name;
    }

    // Return the name.
    get name(){
        return this.#name;
    }

    // Return the username.
    get username(){
        return this.#username;
    }
}