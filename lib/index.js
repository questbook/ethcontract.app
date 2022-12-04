const { default: axios } = require("axios");

async function getAbiFromEtherscan(contractAddress) {
	try {
		const res = await axios.get(
			"https://api.etherscan.io/api?module=contract&action=getabi&address=" +
				contractAddress +
				"&apikey=" +
				process.env.ETHERSCAN_API_KEY
		);
		console.log(res)
		// const json = JSON.parse(res);

		// console.log("I FING WORK");
		// console.log(json);

		return res.data.result;
	} catch (error) {
		console.log("updated")
		console.log("Failed to fetch ABI!");
		console.log(error);
		return null;
	}
}

module.exports.getAbiFromEtherscan = getAbiFromEtherscan;
