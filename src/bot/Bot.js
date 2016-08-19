/**
 * Created by oxymoron on 8/18/16.
 */

export default class Bot {

    constructor(){
        this.count = 0;
    }

    reply(text){
        this.count++;
        if (this.count === 1){
            return `Hi, what is your name?`;
        } else if (!this.userName){
            this.userName = text;
            return `Nice to meet you, ${this.userName}`;
        }
        return `Hey, ${this.userName}!`;
    }

}