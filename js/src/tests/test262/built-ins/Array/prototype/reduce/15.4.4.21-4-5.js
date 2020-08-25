// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.reduce
description: Array.prototype.reduce throws TypeError if callbackfn is number
---*/

var arr = new Array(10);
assert.throws(TypeError, function() {
  arr.reduce(5);
});

reportCompare(0, 0);
