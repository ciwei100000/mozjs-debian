// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.filter
es5id: 15.4.4.20-2-14
description: >
    Array.prototype.filter applied to the Array-like object that
    'length property doesn't exist
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
  return true;
}

var obj = {
  0: 11,
  1: 12
};

var newArr = Array.prototype.filter.call(obj, callbackfn);

assert.sameValue(newArr.length, 0, 'newArr.length');
assert.sameValue(accessed, false, 'accessed');

reportCompare(0, 0);
