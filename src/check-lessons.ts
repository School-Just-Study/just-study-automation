import {HOST} from "./config";
import fetch from 'node-fetch';

module.exports.handler = async function () {

    await fetch(`${HOST}/api/check-lessons`)

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/plain'
        },
        isBase64Encoded: false,
        body: `Уведомления отправлены`
    }
};