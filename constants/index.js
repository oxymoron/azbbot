/**
 * Created by oxymoron on 8/18/16.
 */

const config = require('config');

const APP_SECRET = process.env.MESSENGER_APP_SECRET || config.get('appSecret');
const MESSENGER_VALIDATION_TOKEN = process.env.MESSENGER_VALIDATION_TOKEN || config.get('validationToken');
const MESSENGER_PAGE_ACCESS_TOKEN = process.env.MESSENGER_PAGE_ACCESS_TOKEN || config.get('pageAccessToken');
const SERVER_URL = process.env.SERVER_URL || config.get('serverURL');