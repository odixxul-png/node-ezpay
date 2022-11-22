const express = require('express');
const { invoiceIssue, invoiceInvalid, allowanceIssue, allowanceInvalid, invoiceSearch } = require('./ezpay-api');
const TestDataInvoiceIssue = require('./data/test-invoice-issue');
const TestDataInvoiceInvalid = require('./data/test-invoice-invalid');
const TestDataAllowanceIssue = require('./data/test-allowance-issue');
const TestDataAllowanceInvalid = require('./data/test-allowance-invalid');
const TestDataInvoiceSearch = require('./data/test-invoice-search');

const MerchantID_ = '';
const HashKey = '';
const HashIV = '';

function StartAppServer() {
    const app = express();

    app.use(express.json());

    // 開立發票
    app.get('/invoiceIssue', async (req, res) => {
        const apiResultData = await invoiceIssue(MerchantID_, HashKey, HashIV, TestDataInvoiceIssue.TestDataInvoiceIssue);

        res.json({
            status: 'success',
            data: typeof apiResultData.Result == 'string' ? JSON.parse(apiResultData.Result) : {},
            error: undefined,
        });
    });

    // 作廢發票
    app.get('/invoiceInvalid', async (req, res) => {
        const apiResultData = await invoiceInvalid(MerchantID_, HashKey, HashIV, TestDataInvoiceInvalid.TestDataInvoiceInvalid);

        res.json({
            status: 'success',
            data: typeof apiResultData.Result == 'string' ? JSON.parse(apiResultData.Result) : {},
            error: undefined,
        });
    });

    // 開立折讓
    app.get('/allowanceIssue', async (req, res) => {
        const apiResultData = await allowanceIssue(MerchantID_, HashKey, HashIV, TestDataAllowanceIssue.TestDataAllowanceIssue);

        res.json({
            status: 'success',
            data: typeof apiResultData.Result == 'string' ? JSON.parse(apiResultData.Result) : {},
            error: undefined,
        });
    });

    // 作廢折讓
    app.get('/allowanceInvalid', async (req, res) => {
        const apiResultData = await allowanceInvalid(MerchantID_, HashKey, HashIV, TestDataAllowanceInvalid.TestDataAllowanceInvalid);

        res.json({
            status: 'success',
            data: typeof apiResultData.Result == 'string' ? JSON.parse(apiResultData.Result) : {},
            error: undefined,
        });
    });

    // 查詢發票
    app.get('/invoiceSearch', async (req, res) => {
        const apiResultData = await invoiceSearch(MerchantID_, HashKey, HashIV, TestDataInvoiceSearch.TestDataInvoiceSearch);

        res.json({
            status: 'success',
            data: typeof apiResultData.Result == 'string' ? JSON.parse(apiResultData.Result) : {},
            error: undefined,
        });
    });

    const port = 8080;
    app.listen(port, () => {
        console.log(`API service on url: http://localhost:${port}`);
    });
}

(async () => {
    StartAppServer();
})();
