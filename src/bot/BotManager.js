/**
 * Created by oxymoron on 8/18/16.
 */

'use strict';

class BotManager {

    processMessage(message){
        return `Hello, ${message.senderId}, your message was ${message.text}`;
    }

}

export default new BotManager();