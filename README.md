In a Nutshell
=============

Small library generating random ntegers using node.js crypto as source
of random data. The distribution of integers is uniform as far as the
input produced by the crypto volume is random.


Reference
=========

```
const rndInt = require('rndint');

var x = rndInt(100000);
// x is a random value between 0 and 100000 inclusive

var x = rndInt();
// x is a random integer between x and Number.MAX_SAFE_INTEGER inclusive

var x = rndInt(100000000000000000000);
// Throws an error, because argument is too big to be presented as a
safe integer (i.e. test Number.isSafeInteger(100000000000000000000)
returns false.
```


Author
======

Timo J. Rinne <tri@iki.fi>


License
=======

GPL-2.0
