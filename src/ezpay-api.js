const CryptoJs = require("crypto-js");
const request = require('request');
const querystring = require('querystring');
const testApiUrl = 'https://cinv.ezpay.com.tw/Api';

function httpRequest(url, method, params) {
    const result = new Promise((resolve, reject) => {
        const options = {
            url: url,
            method: method,
            form: params,
            json: true,
        };

        request(options, function (error, response) {
            const responseBody = response.body;

            if (!error && response.statusCode == 200) {
                resolve(responseBody);
            }
            else {
                console.log('error:' + error);
                console.log('status:' + response.statusCode);
                console.log('body:' + responseBody);
                reject(error)
            }
        });
    });

    return result;
}

function encrypt(key, iv, data) {

    const content = CryptoJs.enc.Utf8.parse(querystring.stringify(data));
    const keyParse = CryptoJs.enc.Utf8.parse(key);
    const ivParse = CryptoJs.enc.Utf8.parse(iv);
    const encrypted = CryptoJs.AES.encrypt(content, keyParse, {
        iv: ivParse,
        mode: CryptoJs.mode.CBC,
        padding: CryptoJs.pad.Pkcs7,
    });

    return encrypted.ciphertext.toString();
}

async function invoiceIssue(merchantID, key, iv, data) {
    const params = {
        MerchantID_: merchantID,
        PostData_: encrypt(key, iv, data),
    }

    const url = `${testApiUrl}/invoice_issue`;
    const result = await httpRequest(url, 'post', params);

    return result;
}

async function invoiceInvalid(merchantID, key, iv, data) {
    const params = {
        MerchantID_: merchantID,
        PostData_: encrypt(key, iv, data),
    }

    const url = `${testApiUrl}/invoice_invalid`;
    const result = await httpRequest(url, 'post', params);

    return result;
}

async function allowanceIssue(merchantID, key, iv, data) {
    const params = {
        MerchantID_: merchantID,
        PostData_: encrypt(key, iv, data),
    }

    const url = `${testApiUrl}/allowance_issue`;
    const result = await httpRequest(url, 'post', params);

    return result;
}

async function allowanceInvalid(merchantID, key, iv, data) {
    const params = {
        MerchantID_: merchantID,
        PostData_: encrypt(key, iv, data),
    }

    const url = `${testApiUrl}/allowanceInvalid`;
    const result = await httpRequest(url, 'post', params);

    return result;
}

async function invoiceSearch(merchantID, key, iv, data) {
    const params = {
        MerchantID_: merchantID,
        PostData_: encrypt(key, iv, data),
    }

    const url = `${testApiUrl}/invoice_search`;
    const result = await httpRequest(url, 'post', params);

    return result;
}

module.exports = {
    encrypt,
    invoiceIssue,
    invoiceInvalid,
    allowanceIssue,
    allowanceInvalid,
    invoiceSearch,
}