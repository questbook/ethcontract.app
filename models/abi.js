var mongoose = require('mongoose');
var Crypto = require('crypto');
var Schema = mongoose.Schema;

var AbiSchema = new Schema({
  hash: String,
  abi: Object,
});
const AbiModel = mongoose.model('AbiModel', AbiSchema );

async function storeAbi(abi) {
  const hash = Crypto.createHash('md5').update(JSON.stringify(abi)).digest('hex');
  await (new AbiModel({ hash, abi })).save();
  return hash;
}

async function retrieveAbi(hash) {
  return (await AbiModel.findOne({ hash })).abi;
}


module.exports.storeAbi = storeAbi;
module.exports.retrieveAbi = retrieveAbi;
