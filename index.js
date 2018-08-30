// console.log("Starting app...")

// var ib = new (require('ib'))({
//     clientId: '1586293', // maybe prepend with U
//     host: '127.0.0.1',
//     port: 7496
//   }).on('error', function (err) {
//     console.error('error --- %s', err.message);
//   }).on('result', function (event, args) {
//     console.log('%s --- %s', event, JSON.stringify(args));
//   }).once('nextValidId', function (orderId) {
//     ib.placeOrder(
//       orderId,
//       ib.contract.stock('AAPL'),
//       ib.order.limit('BUY', 1, 0.01)  // safe, unreal value used for demo
//     );
//     ib.reqOpenOrders();
//   }).once('openOrderEnd', function () {
//     ib.disconnect();
//   })
   
//   ib.connect()
//     .reqIds(1);

var _ = require('lodash');
var chalk = require('chalk');

var ib = new (require('ib'))({
    clientId: '1586293', // maybe prepend with U
    host: '127.0.0.1',
    port: 7496
}).on('error', function (err) {
  console.error(chalk.red(err.message));
}).on('historicalData', function (reqId, date, open, high, low, close, volume, barCount, WAP, hasGaps) {
  if (_.includes([-1], open)) {
    console.log('endhistoricalData');
  } else {
    console.log(
    '%s %s%d %s%s %s%d %s%d %s%d %s%d %s%d %s%d %s%d %s%d',
    chalk.cyan('[historicalData]'),
    'reqId='.bold, reqId,
    'date='.bold, date,
    'open='.bold, open,
    'high='.bold, high,
    'low='.bold, low,
    'close='.bold, close,
    'volume='.bold, volume,
    'barCount='.bold, barCount,
    'WAP='.bold, WAP,
    'hasGaps='.bold, hasGaps
    );
  }
});


ib.connect();

// tickerId, contract, endDateTime, durationStr, barSizeSetting, whatToShow, useRTH, formatDate, keepUpToDate
ib.reqHistoricalData(1, ib.contract.stock('SPY','SMART','USD'), '20160308 12:00:00', '1800 S', '1 secs', 'TRADES', 1, 1, false);

ib.on('historicalData', function (reqId, date, open, high, low, close, volume, barCount, WAP, hasGaps) {
  if (_.includes([-1], open)) {
    //ib.cancelHistoricalData(1);  // tickerId
    ib.disconnect();
  }
});

