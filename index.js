import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';

export default {
	plugins: [
		buble(),
		uglify(),
	],
	format: 'iife'
};
