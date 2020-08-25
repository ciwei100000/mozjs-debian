// Copyright 2020 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Soyombo`
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
    [0x011A50, 0x011AA2]
  ]
});
testPropertyEscapes(
  /^\p{Script=Soyombo}+$/u,
  matchSymbols,
  "\\p{Script=Soyombo}"
);
testPropertyEscapes(
  /^\p{Script=Soyo}+$/u,
  matchSymbols,
  "\\p{Script=Soyo}"
);
testPropertyEscapes(
  /^\p{sc=Soyombo}+$/u,
  matchSymbols,
  "\\p{sc=Soyombo}"
);
testPropertyEscapes(
  /^\p{sc=Soyo}+$/u,
  matchSymbols,
  "\\p{sc=Soyo}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x011A4F],
    [0x011AA3, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Soyombo}+$/u,
  nonMatchSymbols,
  "\\P{Script=Soyombo}"
);
testPropertyEscapes(
  /^\P{Script=Soyo}+$/u,
  nonMatchSymbols,
  "\\P{Script=Soyo}"
);
testPropertyEscapes(
  /^\P{sc=Soyombo}+$/u,
  nonMatchSymbols,
  "\\P{sc=Soyombo}"
);
testPropertyEscapes(
  /^\P{sc=Soyo}+$/u,
  nonMatchSymbols,
  "\\P{sc=Soyo}"
);

reportCompare(0, 0);
