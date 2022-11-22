const { encrypt } = require('./ezpay-api');
const TestDataInvoiceIssue = require('./data/test-invoice-issue');

const result = encrypt('ofX5Pt8yeK8jxv0WdYkBeZFMncYqh2pG', 'CZMev3bpDWhgJVeP', TestDataInvoiceIssue.TestDataInvoiceIssue);
console.log(result);
