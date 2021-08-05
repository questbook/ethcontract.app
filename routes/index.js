var express = require('express');
var router = express.Router();
var axios = require('axios');
var atob = require('atob');
var btoa = require('btoa');
var { storeAbi, retrieveAbi } = require('../models/abi');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('new', { title: 'Express' });
});

router.get('/new', async function(req, res){
  res.render('new');
})

router.post('/new', async (req, res)=> {
  const hash = await storeAbi(JSON.parse(req.body.abi));
  res.redirect('/'+req.body.address+"/?abi="+hash);
})

router.get('/:address', async function(req, res) {
  const abiJson = await retrieveAbi(req.query.abi);
  console.log(abiJson);
  const functions = abiJson.filter(a => a.type === "function");
  const variables = abiJson.filter(a => a.type !== "function" && a.type !== "constructor");
  res.render('index',  { functions, variables, address: req.params.address, abiEncoded: req.query.abi });
});

router.get('/:address/:function', async function(req, res) {
  try {
  const abiJson = await retrieveAbi(req.query.abi);
  const fun = abiJson.filter(a => a.type === "function" && a.name === req.params.function)[0];
  res.render('function',  { fun, address: req.params.address, abiJson, abiEncoded: req.query.abi });
  }
  catch(e){
    console.log(e);
    res.render('error');
  }
});



module.exports = router;
