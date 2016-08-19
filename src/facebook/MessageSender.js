/**
 * Created by oxymoron on 8/18/16.
 */

import {PAGE_ACCESS_TOKEN} from '../constants';
import request from 'request';

class MessageSender {

    sendTextMessage(recipientId, messageText) {
        this.sendMessage({
            recipient: {
                id: recipientId
            },
            message: {
                text: messageText,
                metadata: "DEVELOPER_DEFINED_METADATA"
            }
        });
    }

    sendMessage(messageData) {
        request({
            uri: 'https://graph.facebook.com/v2.6/me/messages',
            qs: {access_token: PAGE_ACCESS_TOKEN},
            method: 'POST',
            json: messageData
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var recipientId = body.recipient_id;
                var messageId = body.message_id;
                if (messageId) {
                    console.log("Successfully sent message with id %s to recipient %s", messageId, recipientId);
                } else {
                    console.log("Successfully called Send API for recipient %s", recipientId);
                }
            } else {
                console.error(response.error);
            }
        });
    }

}

export default new MessageSender();