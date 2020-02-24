// |reftest| skip -- regexp-unicode-property-escapes is not supported
// Copyright 2019 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Khudawadi`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v12.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x0112B0, 0x0112EA],
    [0x0112F0, 0x0112F9]
  ]
});
testPropertyEscapes(
  /^\p{Script=Khudawadi}+$/u,
  matchSymbols,
  "\\p{Script=Khudawadi}"
);
testPropertyEscapes(
  /^\p{Script=Sind}+$/u,
  matchSymbols,
  "\\p{Script=Sind}"
);
testPropertyEscapes(
  /^\p{sc=Khudawadi}+$/u,
  matchSymbols,
  "\\p{sc=Khudawadi}"
);
testPropertyEscapes(
  /^\p{sc=Sind}+$/u,
  matchSymbols,
  "\\p{sc=Sind}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x0112AF],
    [0x0112EB, 0x0112EF],
    [0x0112FA, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Khudawadi}+$/u,
  nonMatchSymbols,
  "\\P{Script=Khudawadi}"
);
testPropertyEscapes(
  /^\P{Script=Sind}+$/u,
  nonMatchSymbols,
  "\\P{Script=Sind}"
);
testPropertyEscapes(
  /^\P{sc=Khudawadi}+$/u,
  nonMatchSymbols,
  "\\P{sc=Khudawadi}"
);
testPropertyEscapes(
  /^\P{sc=Sind}+$/u,
  nonMatchSymbols,
  "\\P{sc=Sind}"
);

reportCompare(0, 0);
