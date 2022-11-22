const date = new Date();
const time = parseInt(date.getTime() / 1000);

const TestInvoiceNumber = '';

const TestDataInvoiceInvalid = {
    RespondType: 'JSON',
    Version: '1.0',
    TimeStamp: time,
    InvoiceNumber: TestInvoiceNumber,
    InvalidReason: '測試作廢',
}

module.exports = {
    TestDataInvoiceInvalid,
}