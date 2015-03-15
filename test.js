var Conekta = require('./index'),
  conekta = Conekta.init('key_xFq12ins9pZKubYHQmyMWw');

conekta.Customer.getCreditCards(
  'cus_j9x3w26LqdFBDiykU',
  function (err, response) {
    console.log('ERR: ', err);

    console.log(response.body);
  }
);
