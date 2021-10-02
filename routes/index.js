var express = require('express');
var router = express.Router();
var axios = require('axios');
var { storeAbi, retrieveAbi } = require('../models/abi');

var Web3 = require('web3');
var web3 = new Web3(process.env.INFURA);

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    const parts = req.hostname.split('.');
    if (parts.length === 3) {
      const name = parts[0] + '.eth';
      const address = await web3.eth.ens.getAddress(name);
      const abi = JSON.parse(
        (
          await axios.get(
            'https://api.etherscan.io/api?module=contract&action=getabi&address=' + address,
          )
        ).data.result,
      );
      const hash = await storeAbi(abi);

      return res.redirect('/' + address + '?abi=' + hash);
    }
  } catch (e) {
    console.log(e);
    return res.render('error');
  }
  res.render('new', { title: 'Express' });
});

router.get('/new', async function (req, res) {
  res.render('new');
});

router.post('/new', async (req, res) => {
  const hash = await storeAbi(JSON.parse(req.body.abi));
  res.redirect('/' + req.body.address + '/?abi=' + hash + '&network=' + req.body.network);
});

router.get('/:address', async function (req, res) {
  const abiJson = await retrieveAbi(req.query.abi);
  const network = req.query.network;
  let title = req.params.address;
  const parts = req.hostname.split('.');
  if (parts.length === 3) {
    title += ' (' + parts[0] + '.eth)';
  }

  const functions = abiJson.filter((a) => a.type === 'function');
  const variables = abiJson.filter((a) => a.type !== 'function' && a.type !== 'constructor');
  res.render('index', {
    functions,
    variables,
    address: req.params.address,
    abiEncoded: req.query.abi,
    title,
    network,
  });
});

router.get('/:address/:function', async function (req, res) {
  try {
    const abiJson = await retrieveAbi(req.query.abi);
    const fun = abiJson.filter((a) => a.type === 'function' && a.name === req.params.function)[0];
    res.render('function', {
      fun,
      address: req.params.address,
      abiJson,
      abiEncoded: req.query.abi,
    });
  } catch (e) {
    console.log(e);
    res.render('error');
  }
});

module.exports = router;
