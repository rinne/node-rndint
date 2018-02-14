'use strict';

const crypto = require('crypto');

function rb(b) {
	var d, h, l;
	if (Number.isSafeInteger(b)) {
		if ((b >= 1) && (b <= 32)) {
			d = crypto.randomBytes(4);
			l = d.readUInt32LE(0);
			return (l >>> (32 - b));
		} else if ((b >= 33) && (b <= 53)) {
			d = crypto.randomBytes(8);
			l = d.readUInt32LE(0);
			h = d.readUInt32LE(4);
			return (((h >>> (64 - b)) * 4294967296) + l);
		} else if (b == 0) {
			return 0;
		}
	}
	throw new Error('Bad number of bits');
}

function bl(n) {
	var r;
	for (r = 0; n > 0; r++) {
		n = Math.trunc(n / 2);
	}
	return r;
}

function rndInt(n) {
	var b, r;
	if ((n === undefined) || (n === null)) {
		n = 9007199254740991;
	}
	if (! (Number.isSafeInteger(n) && (n >= 0) && (n <= 9007199254740991))) {
		throw new Error("Bad limit");
	}
	b = bl(n);
	do {
		r = rb(b);
	} while(r > n);
	return r;
}

module.exports = rndInt;

(function(M, m) {
	if (M !== 9007199254740991) {
		throw new Error('Unexpected Number.MAX_SAFE_INTEGER');
	}
	if (m !== -9007199254740991) {
		throw new Error('Unexpected Number.MIN_SAFE_INTEGER');
	}
})(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
