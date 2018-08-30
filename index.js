console.log("Starting app...")

var ib = new (require('ib'))({
    clientId: 'U1586293', // maybe prepend with U
    host: '192.168.1.1',
    port: 7496
  }).on('error', function (err) {
    console.error('error --- %s', err.message);
  }).on('result', function (event, args) {
    console.log('%s --- %s', event, JSON.stringify(args));
  }).once('nextValidId', function (orderId) {
    ib.placeOrder(
      orderId,
      ib.contract.stock('AAPL'),
      ib.order.limit('BUY', 1, 0.01)  // safe, unreal value used for demo
    );
    ib.reqOpenOrders();
  }).once('openOrderEnd', function () {
    ib.disconnect();
  })
   
  ib.connect()
    .reqIds(1);