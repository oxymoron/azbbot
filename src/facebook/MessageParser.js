/**
 * Created by oxymoron on 8/18/16.
 */

class MessageParser {

    parse(data){
        let messages = [];
        if (data.object == 'page') {
            data.entry.forEach(it => this.parsePageEntry(it, messages));
        }
        return messages;
    }

    parsePageEntry(pageEntry, messages){
        pageEntry.messaging.forEach(it => this.parseMessagingEvent(it, messages));
    }

    parseMessagingEvent(messagingEvent, messages){
        if (messagingEvent.message) {
            this.parseEvent(messagingEvent, messages);
        } else {
            console.log("Webhook received unknown messagingEvent: ", messagingEvent);
        }
    }

    parseEvent(event, messages) {
        let {message} = event,
            {text} = message;
        if (text) {
            messages.push({senderId: event.sender.id, text});
        }
    }
}

export default new MessageParser();