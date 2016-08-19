/**
 * Created by oxymoron on 8/18/16.
 */
'use strict';

import {Router} from 'express';
import {VALIDATION_TOKEN} from '../constants';
import BotManager from '../bot/BotManager';
import MessageSender from '../facebook/MessageSender';
import MessageParser from '../facebook/MessageParser';

export let router = Router();

router.get('/webhook', function(req, res) {
    if (req.query['hub.mode'] === 'subscribe' &&
        req.query['hub.verify_token'] === VALIDATION_TOKEN) {
        console.log("Validating webhook");
        res.status(200).send(req.query['hub.challenge']);
    } else {
        console.error("Failed validation. Make sure the validation tokens match.");
        res.sendStatus(403);
    }
});

router.post('/webhook', function (req, res) {
    let messages = MessageParser.parse(req.body);
    let answers = messages.map(it => (Object.assign(it, {answer: BotManager.processMessage(it)})));
    answers.forEach(it => MessageSender.sendTextMessage(it.senderId, it.text));
    res.sendStatus(200);
});






