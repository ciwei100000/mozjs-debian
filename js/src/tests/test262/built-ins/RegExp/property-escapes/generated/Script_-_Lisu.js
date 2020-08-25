// Copyright 2020 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Lisu`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v13.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x011FB0
  ],
  ranges: [
    [0x00A4D0, 0x00A4FF]
  ]
});
testPropertyEscapes(
  /^\p{Script=Lisu}+$/u,
  matchSymbols,
  "\\p{Script=Lisu}"
);
testPropertyEscapes(
  /^\p{Script=Lisu}+$/u,
  matchSymbols,
  "\\p{Script=Lisu}"
);
testPropertyEscapes(
  /^\p{sc=Lisu}+$/u,
  matchSymbols,
  "\\p{sc=Lisu}"
);
testPropertyEscapes(
  /^\p{sc=Lisu}+$/u,
  matchSymbols,
  "\\p{sc=Lisu}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00A4CF],
    [0x00A500, 0x00DBFF],
    [0x00E000, 0x011FAF],
    [0x011FB1, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Lisu}+$/u,
  nonMatchSymbols,
  "\\P{Script=Lisu}"
);
testPropertyEscapes(
  /^\P{Script=Lisu}+$/u,
  nonMatchSymbols,
  "\\P{Script=Lisu}"
);
testPropertyEscapes(
  /^\P{sc=Lisu}+$/u,
  nonMatchSymbols,
  "\\P{sc=Lisu}"
);
testPropertyEscapes(
  /^\P{sc=Lisu}+$/u,
  nonMatchSymbols,
  "\\P{sc=Lisu}"
);

reportCompare(0, 0);
