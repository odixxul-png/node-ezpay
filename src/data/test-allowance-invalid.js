const date = new Date();
const time = parseInt(date.getTime() / 1000);

const TestAllowanceNo = '';

const TestDataAllowanceInvalid = {
    RespondType: 'JSON',
    Version: '1.0',
    TimeStamp: time,
    AllowanceNo: TestAllowanceNo,
    InvalidReason: '測試作廢折讓',
}

module.exports = {
    TestDataAllowanceInvalid,
}