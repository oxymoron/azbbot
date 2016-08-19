/**
 * Created by oxymoron on 8/18/16.
 */

const config = require('config');

export const APP_SECRET = process.env.MESSENGER_APP_SECRET || config.get('appSecret');
export const VALIDATION_TOKEN = process.env.MESSENGER_VALIDATION_TOKEN || config.get('validationToken');
export const PAGE_ACCESS_TOKEN = process.env.MESSENGER_PAGE_ACCESS_TOKEN || config.get('pageAccessToken');
export const SERVER_URL = process.env.SERVER_URL || config.get('serverURL');
