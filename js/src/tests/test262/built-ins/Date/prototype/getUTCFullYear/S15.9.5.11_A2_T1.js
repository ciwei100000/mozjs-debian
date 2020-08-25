// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The "length" property of the "getUTCFullYear" is 0
esid: sec-date.prototype.getutcfullyear
description: The "length" property of the "getUTCFullYear" is 0
---*/

if (Date.prototype.getUTCFullYear.hasOwnProperty("length") !== true) {
  $ERROR('#1: The getUTCFullYear has a "length" property');
}

if (Date.prototype.getUTCFullYear.length !== 0) {
  $ERROR('#2: The "length" property of the getUTCFullYear is 0');
}

reportCompare(0, 0);
