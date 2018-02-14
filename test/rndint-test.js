'use strict';

const rndInt = require('../rndint.js');
const assert = require('assert');

(function() {
	var i, j, x;
	for (i = 1; i <  Number.MAX_SAFE_INTEGER; i *= 10) {
		for (j = 0; j < 1000; j++) {
			x = rndInt(i);
			assert.ok(Number.isSafeInteger(x) && (x >= 0) && (x <= i), 'Failed!');
		}
	}
})();

process.exit(0);
