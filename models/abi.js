var mongoose = require('mongoose');
var Crypto = require('crypto');
var Schema = mongoose.Schema;

var AbiSchema = new Schema({
  hash: String,
  abi: Object,
  network: String,
});
const AbiModel = mongoose.model('AbiModel', AbiSchema);

async function storeAbi(abi, network) {
  const hash = Crypto.createHash('md5').update(JSON.stringify(abi)).digest('hex');
  await new AbiModel({ hash, abi, network }).save();
  return hash;
}

async function retrieveAbi(hash) {
  const result = await AbiModel.findOne({ hash });
  return result && result.abi;
}

module.exports.storeAbi = storeAbi;
module.exports.retrieveAbi = retrieveAbi;
