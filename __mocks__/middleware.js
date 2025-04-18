/* eslint-disable @typescript-eslint/no-var-requires */
const accountVCs = require('./accountVCs.json');
const transactionVCs = require('./transactionVCs.json');

module.exports = (req, res, next) => {
  console.log('Middleware request listener');
  if (req.method === 'GET') {
    if (req.url === '/banking/authcode') {
      res.json({
        userId: '0',
        authCode: '0',
      });
    } else if (req.url.includes('/banking/accounts')) {
      res.json({ vc: accountVCs });
    } else if (req.url.includes('/banking/transactions')) {
      res.json({ vc: transactionVCs });
    } else {
      // Let json file handle the response.
      next();
    }
  } else if (req.method === 'POST') {
    console.log(req.url, req.body);
    switch (req.url) {
      case '/auth/phone':
        res.json({ phone: req.body.phone, pin: '123456' });
        break;
      case '/auth/phone/verify':
        res.json({ success: true, token: '0' });
        break;
      case '/creditscore':
        if (req.body.ssn) {
          res.json({ creditRange: '750_800' });
        } else {
          res.status(204).json({ success: false });
        }
        break;
      case '/event':
        res.json({ success: true });
        break;
      case '/loanrequest':
        res.json({
          _id: '1',
          loanAmount: 100000,
          loanType: 'home',
          userId: '1',
        });
        break;
      case '/riki':
        // Return computed score using bank records as input.
        res.json({
          rikiScore: 200,
          rikiAsWords: 'Nice!',
          netIncome: 1040,
          borrowingPowerLowerBound: 170000,
          borrowingPowerUpperBound: 230000,
          lastDataDate: '2024-04-19T19:06:01Z',
          firstDataDate: '2024-01-20T00:00:00Z',
          dateRange: 91,
          nUsableMonths: 2,
          softwareVersion: '3.4.4.0',
        });
        break;
      case '/user/email/verify':
        res.json({ success: true });
        break;
      default:
        // Let json file handle the response.
        next();
        break;
    }
  } else {
    // Not a post request. Let the json file handle the response.
    next();
  }
};
