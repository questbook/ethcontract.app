const path = require("path");

module.exports = {
	entry: "./wallet copy.js",
	output: {
		path: path.resolve(__dirname, "public/javascripts/"),
		filename: "w3m-webpack.js",
	},
	mode: "production",
	resolve: {
		fallback: {
			stream: require.resolve("stream-browserify"),
		},
	},
};
