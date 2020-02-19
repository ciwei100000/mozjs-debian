// |reftest| skip -- Intl.Locale is not supported
// Copyright 2018 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.Locale.prototype.toString
description: >
    Verifies the branding check for the "toString" function of the Locale prototype object.
info: |
    Intl.Locale.prototype.toString

    2. If Type(loc) is not Object or loc does not have an [[InitializedLocale]] internal slot, then
        a. Throw a TypeError exception.
features: [Intl.Locale]
---*/

const toString = Intl.Locale.prototype.toString;

assert.sameValue(typeof toString, "function");

const invalidValues = [
  undefined,
  null,
  true,
  "",
  Symbol(),
  1,
  {},
  Intl.Locale.prototype,
];

for (const invalidValue of invalidValues) {
  assert.throws(TypeError, () => toString.call(invalidValue));
}

reportCompare(0, 0);
