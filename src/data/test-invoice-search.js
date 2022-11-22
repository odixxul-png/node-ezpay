const date = new Date();
const time = parseInt(date.getTime() / 1000);

const TestMerchantOrderNo = '';
const TestInvoiceNumber = '';
const TestRandomNum = '';

const TestDataInvoiceSearch = {
    RespondType: 'JSON',
    Version: '1.3',
    TimeStamp: time,
    SearchType: '',
    MerchantOrderNo: TestMerchantOrderNo,
    TotalAmt: 500,
    InvoiceNumber: TestInvoiceNumber,
    RandomNum: TestRandomNum,
    DisplayFlag: '',
}

module.exports = {
    TestDataInvoiceSearch,
}