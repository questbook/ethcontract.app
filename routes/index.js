var express = require('express');
var router = express.Router();
var axios = require('axios');
var atob = require('atob');
var btoa = require('btoa');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('new', { title: 'Express' });
});

async function getAbi(req) {
  const { query, params } = req;
  if(query.abi){
    return {abiJson: JSON.parse(atob(query.abi))};
  }
  const APIKEY = "";
  const abi = ( await axios.get('https://api-ropsten.etherscan.io/api?module=contract&action=getabi&apikey='+APIKEY+'&address='+address) ).data;
  return { abiJson: JSON.parse(abi.result), abi};
}

router.get('/new', async function(req, res){
  res.render('new');
})

router.post('/new', (req, res)=> {
  let objJsonB64 = btoa(req.body.abi);
  res.redirect('/'+req.body.address+"/?abi="+objJsonB64);
})

router.get('/:address', async function(req, res) {
  const {abiJson} = await getAbi(req);
  console.log(abiJson);
  const functions = abiJson.filter(a => a.type === "function");
  const variables = abiJson.filter(a => a.type !== "function" && a.type !== "constructor");
  res.render('index',  { functions, variables, address: req.params.address, abiEncoded: req.query.abi });
});

router.get('/:address/:function', async function(req, res) {
  try {
  const { abiJson, abi } = await getAbi(req);
  const fun = abiJson.filter(a => a.type === "function" && a.name === req.params.function)[0];
  res.render('function',  { fun, address: req.params.address, abiJson, abiEncoded: req.query.abi });
  }
  catch(e){
    console.log(e);
    res.render('error');
  }
});



module.exports = router;
