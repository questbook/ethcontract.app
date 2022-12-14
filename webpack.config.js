const path = require("path");

module.exports = {
	entry: "./wallet.js",
	output: {
		path: path.resolve(__dirname, "public/js/"),
		filename: "w3m.js",
	},
	mode: "production",
	resolve: {
		fallback: {
			stream: require.resolve("stream-browserify"),
		},
	},
};
