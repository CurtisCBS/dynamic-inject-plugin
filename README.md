# DynamicInjectPlugin
A Webpack Plugin that makes dynamic import modules possible. Only Works in 'source-map' mode.

## install 

	npm i dynamic-inject-plugin --save-dev

## useage

	const DynamicInjectPlugin = require('dynamic-inject-plugin');
	
	plugins: [
        new DynamicInjectPlugin({
			fileName: `index.scss`
        })
	]
	