const { default: axios } = require('axios');

async function getAbiFromEtherscan(contractAddress) {
  try {
    return JSON.parse(
      (
        await axios.get(
          'https://api.etherscan.io/api?module=contract&action=getabi&address=' +
            contractAddress
        )
      ).data.result
    );
  } catch (error) {
    console.log(error);
    return null;
  }
}

module.exports.getAbiFromEtherscan = getAbiFromEtherscan;
