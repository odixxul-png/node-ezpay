const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const time = parseInt(date.getTime() / 1000);
const merchantOrderNo = `${year}${month}${day}${time}`;

const TestDataInvoiceIssue = {
    RespondType: 'JSON',
    Version: '1.5',
    TimeStamp: time,
    TransNum: '',
    MerchantOrderNo: merchantOrderNo,
    Status: '1',
    CreateStatusTime: '',
    Category: 'B2C',
    BuyerName: 'test user',
    BuyerUBN: '',
    BuyerAddress: '',
    BuyerEmail: '',
    CarrierType: '',
    CarrierNum: '',
    LoveCode: '',
    PrintFlag: 'Y',
    KioskPrintFlag: '',
    TaxType: '1',
    TaxRate: 5,
    CustomsClearance: '',
    Amt: 490,
    AmtSales: '',
    AmtZero: '',
    AmtFree: '',
    TaxAmt: 10,
    TotalAmt: 500,
    ItemName: '測試商品1|測試商品2',
    ItemCount: '1|2',
    ItemUnit: '個|瓶',
    ItemPrice: '300|100',
    ItemAmt: '300|200',
    ItemTaxType: '',
    Comment: '備註',
}

module.exports = {
    TestDataInvoiceIssue,
}