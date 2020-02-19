// |reftest| skip-if(!this.hasOwnProperty('BigInt')||!this.hasOwnProperty('SharedArrayBuffer')) -- BigInt,SharedArrayBuffer is not enabled unconditionally
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// Copyright (C) 2017 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-typedarray-buffer-byteoffset-length
description: >
  Reuse buffer argument instead of making a new clone
info: |
  22.2.4.5 TypedArray ( buffer [ , byteOffset [ , length ] ] )

  This description applies only if the TypedArray function is called with at
  least one argument and the Type of the first argument is Object and that
  object has an [[ArrayBufferData]] internal slot.

  ...
  15. Set O's [[ViewedArrayBuffer]] internal slot to buffer.
  ...
includes: [testBigIntTypedArray.js]
features: [BigInt, SharedArrayBuffer, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  var bpe = TA.BYTES_PER_ELEMENT;

  var buffer = new SharedArrayBuffer(bpe);

  var ta1 = new TA(buffer);
  var ta2 = new TA(buffer);

  assert.sameValue(ta1.buffer, buffer);
  assert.sameValue(ta2.buffer, buffer);
  assert.sameValue(ta1.buffer, ta2.buffer);
});

reportCompare(0, 0);
