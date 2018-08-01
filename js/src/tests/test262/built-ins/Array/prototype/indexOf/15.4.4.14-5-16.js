// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.indexof
es5id: 15.4.4.14-5-16
description: >
    Array.prototype.indexOf - value of 'fromIndex' is a string
    containing Infinity
---*/

        var arr = [];
        arr[Math.pow(2, 32) - 2] = true; //length is the max value of Uint type

assert.sameValue(arr.indexOf(true, "Infinity"), -1, 'arr.indexOf(true, "Infinity")');

reportCompare(0, 0);
