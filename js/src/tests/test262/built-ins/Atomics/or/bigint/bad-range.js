// |reftest| skip-if(!this.hasOwnProperty('Atomics')||!this.hasOwnProperty('SharedArrayBuffer')||(this.hasOwnProperty('getBuildConfiguration')&&getBuildConfiguration()['arm64-simulator'])) -- Atomics,SharedArrayBuffer is not enabled unconditionally, ARM64 Simulator cannot emulate atomics
// Copyright (C) 2018 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-atomics.or
description: >
  Test range checking of Atomics.or on arrays that allow atomic operations
includes: [testAtomics.js, testBigIntTypedArray.js]
features: [ArrayBuffer, Atomics, BigInt, DataView, SharedArrayBuffer, Symbol, TypedArray]
---*/
var buffer = new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 2);

testWithBigIntTypedArrayConstructors(function(TA) {
  let view = new TA(buffer);

  testWithAtomicsOutOfBoundsIndices(function(IdxGen) {
    assert.throws(RangeError, function() {
      Atomics.or(view, IdxGen(view), 10n);
    }, '`Atomics.or(view, IdxGen(view), 10n)` throws RangeError');
  });
});

reportCompare(0, 0);
