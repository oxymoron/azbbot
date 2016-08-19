/**
 * Created by oxymoron on 8/18/16.
 */

'use strict';

import Bot from './Bot';

class BotManager {

    constructor(){
        // This BotManager uses the simplest strategy: one bot per user.
        // Need to define clean up strategy to release memory occupied by bots.
        this.bots = {};
    }

    processMessage(message){
        let {senderId, text} = message;
        if (!this.bots[senderId]){
            this.bots[senderId] = this.createBot(senderId);
        }
        let bot = this.bots[senderId];
        return bot.reply(text);
    }

    createBot(senderId){
        let bot = new Bot();
        bot.senderId = senderId;
        return bot;
    }

}

export default new BotManager();