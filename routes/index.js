var express = require('express');
var router = express.Router();
var { storeAbi, retrieveAbi } = require('../models/abi');

var Web3 = require('web3');
var { getAbiFromEtherscan } = require('../lib');
const { request } = require('https');
var web3 = new Web3(process.env.INFURA);

/* GET home page. */
router.get('/', async function (req, res, next) {
  console.log("someone opened me")
  try {
    const parts = req.hostname.split('.');
    if (parts.length === 3) {
      const name = parts[0] + '.eth';
      const address = await web3.eth.ens.getAddress(name);
      const abi = await getAbiFromEtherscan(address);
      const hash = await storeAbi(abi, 'mainnet');

      return res.redirect('/' + address + '?abi=' + hash);
    }
  } catch (e) {
    console.log(e);
    return res.render('error');
  }
  res.render('main');
});

router.get('/new', async function (req, res) {
  res.render('new');
});

router.post('/new', async (req, res) => {
  let abi = req.body.abi;
  let address = req.body.address;
  let network = req.body.network;

  if (!address) {
    return res.render('error', { error: 'Address is required' });
  }

  if (!network) {
    return res.render('error', { error: 'Network is required' });
  }

  if (!abi) {
    abi = await getAbiFromEtherscan(address);
  }

  if (!abi) {
    return res.render('error', {
      error: 'Could not automatically fetch ABI.',
    });
  }

  const hash = await storeAbi(JSON.parse(abi), network);
  res.redirect(`/${req.body.address}/?abi=${hash}&network=${network}`);
});

router.get('/:address', async function (req, res) {
  let address = req.params.address;
  let abi = req.query.abi;

  const abiJson = await retrieveAbi(abi);

  if (!abiJson) {
    return res.render('error');
  }

  let network = req.query.network;
  let title = address;
  const pinned = req.query.pinned;
  const parts = req.hostname.split('.');
  if (parts.length === 3) {
    title += ' (' + parts[0] + '.eth)';
  }

  const functions = abiJson.filter((a) => a.type === 'function');
  if (pinned) {
    pinned
      .split(',')
      .reverse()
      .forEach((func) =>
        functions.unshift(
          functions.splice(
            functions.findIndex((f) => f.name === func),
            1,
          )[0],
        ),
      );
  }
  const variables = abiJson.filter((a) => a.type !== 'function' && a.type !== 'constructor');
  res.render('index', {
    functions,
    variables,
    address: req.params.address,
    abiEncoded: req.query.abi,
    abiJson,
    title,
    network,
    url: req.protocol + '://' + req.get('host') + req.originalUrl,
  });
});

router.get('/:address/:function', async function (req, res) {
  try {
    const abiJson = await retrieveAbi(req.query.abi);

    if (!abiJson) {
      return res.render('error');
    }

    let network = req.query.network;
    const fun = abiJson.filter((a) => a.type === 'function' && a.name === req.params.function)[0];
    res.render('function', {
      fun,
      address: req.params.address,
      abiJson,
      abiEncoded: req.query.abi,
      network,
      url: req.protocol + '://' + req.get('host') + req.originalUrl,
    });
  } catch (e) {
    console.log(e);
    res.render('error');
  }
});

module.exports = router;
