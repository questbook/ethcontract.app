var express = require('express');
var router = express.Router();
var { storeAbi, retrieveAbi } = require('../models/abi');

var Web3 = require('web3');
var { getAbiFromEtherscan } = require('../lib');
var web3 = new Web3(process.env.INFURA);

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    const parts = req.hostname.split('.');
    if (parts.length === 3) {
      const name = parts[0] + '.eth';
      const address = await web3.eth.ens.getAddress(name);
      const abi = await getAbiFromEtherscan(address);
      const hash = await storeAbi(abi);

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

  if (!address) {
    return res.render('error', { error: 'Address is required' });
  }

  if (!abi) {
    abi = await getAbiFromEtherscan(address);
  }

  if (!abi) {
    return res.render('error', {
      error: 'Could not automatically fetch ABI.',
    });
  }

  const hash = await storeAbi(abi);
  res.redirect('/' + req.body.address + '/?abi=' + hash);
});

router.get('/:address', async function (req, res) {
  const abiJson = await retrieveAbi(req.query.abi);
  let title = req.params.address;
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
    title,
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
