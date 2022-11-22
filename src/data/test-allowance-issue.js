const date = new Date();
const time = parseInt(date.getTime() / 1000);

const TestInvoiceNumber = '';
const TestMerchantOrderNo = '';

const TestDataAllowanceIssue = {
    RespondType: 'JSON',
    Version: '1.3',
    TimeStamp: time,
    InvoiceNo: TestInvoiceNumber,
    MerchantOrderNo: TestMerchantOrderNo,
    ItemName: '測試商品1|測試商品2',
    ItemCount: '1|2',
    ItemUnit: '個|瓶',
    ItemPrice: '300|100',
    ItemAmt: '300|200',
    TaxTypeForMixed: '',
    ItemTaxAmt: '0|0',
    TotalAmt: 500,
    BuyerEmail: '',
    Status: 1,
}

module.exports = {
    TestDataAllowanceIssue,
}