// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-270
description: >
    Object.defineProperties - 'O' is an Array, 'P' is generic own data
    property of 'O', test TypeError is thrown when updating the
    [[Value]] attribute value of 'P' which is defined as unwritable
    and non-configurable (15.4.5.1 step 5)
includes: [propertyHelper.js]
---*/


var arr = [];

Object.defineProperty(arr, "property", {
  value: 12
});

try {
  Object.defineProperties(arr, {
    "property": {
      value: 36
    }
  });
  $ERROR("Expected an exception.");
} catch (e) {
  verifyEqualTo(arr, "property", 12);

  verifyNotWritable(arr, "property");

  verifyNotEnumerable(arr, "property");

  verifyNotConfigurable(arr, "property");

  if (!(e instanceof TypeError)) {
    $ERROR("Expected TypeError, got " + e);
  }

}

reportCompare(0, 0);
