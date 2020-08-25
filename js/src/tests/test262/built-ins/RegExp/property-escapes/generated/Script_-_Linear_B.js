// Copyright 2020 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Linear_B`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v13.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x010000, 0x01000B],
    [0x01000D, 0x010026],
    [0x010028, 0x01003A],
    [0x01003C, 0x01003D],
    [0x01003F, 0x01004D],
    [0x010050, 0x01005D],
    [0x010080, 0x0100FA]
  ]
});
testPropertyEscapes(
  /^\p{Script=Linear_B}+$/u,
  matchSymbols,
  "\\p{Script=Linear_B}"
);
testPropertyEscapes(
  /^\p{Script=Linb}+$/u,
  matchSymbols,
  "\\p{Script=Linb}"
);
testPropertyEscapes(
  /^\p{sc=Linear_B}+$/u,
  matchSymbols,
  "\\p{sc=Linear_B}"
);
testPropertyEscapes(
  /^\p{sc=Linb}+$/u,
  matchSymbols,
  "\\p{sc=Linb}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x01000C,
    0x010027,
    0x01003B,
    0x01003E
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x00FFFF],
    [0x01004E, 0x01004F],
    [0x01005E, 0x01007F],
    [0x0100FB, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Linear_B}+$/u,
  nonMatchSymbols,
  "\\P{Script=Linear_B}"
);
testPropertyEscapes(
  /^\P{Script=Linb}+$/u,
  nonMatchSymbols,
  "\\P{Script=Linb}"
);
testPropertyEscapes(
  /^\P{sc=Linear_B}+$/u,
  nonMatchSymbols,
  "\\P{sc=Linear_B}"
);
testPropertyEscapes(
  /^\P{sc=Linb}+$/u,
  nonMatchSymbols,
  "\\P{sc=Linb}"
);

reportCompare(0, 0);
