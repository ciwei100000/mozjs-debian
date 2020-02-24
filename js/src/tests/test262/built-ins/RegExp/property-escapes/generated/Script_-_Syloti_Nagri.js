// |reftest| skip -- regexp-unicode-property-escapes is not supported
// Copyright 2019 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Syloti_Nagri`
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
    [0x00A800, 0x00A82B]
  ]
});
testPropertyEscapes(
  /^\p{Script=Syloti_Nagri}+$/u,
  matchSymbols,
  "\\p{Script=Syloti_Nagri}"
);
testPropertyEscapes(
  /^\p{Script=Sylo}+$/u,
  matchSymbols,
  "\\p{Script=Sylo}"
);
testPropertyEscapes(
  /^\p{sc=Syloti_Nagri}+$/u,
  matchSymbols,
  "\\p{sc=Syloti_Nagri}"
);
testPropertyEscapes(
  /^\p{sc=Sylo}+$/u,
  matchSymbols,
  "\\p{sc=Sylo}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00A7FF],
    [0x00A82C, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Syloti_Nagri}+$/u,
  nonMatchSymbols,
  "\\P{Script=Syloti_Nagri}"
);
testPropertyEscapes(
  /^\P{Script=Sylo}+$/u,
  nonMatchSymbols,
  "\\P{Script=Sylo}"
);
testPropertyEscapes(
  /^\P{sc=Syloti_Nagri}+$/u,
  nonMatchSymbols,
  "\\P{sc=Syloti_Nagri}"
);
testPropertyEscapes(
  /^\P{sc=Sylo}+$/u,
  nonMatchSymbols,
  "\\P{sc=Sylo}"
);

reportCompare(0, 0);
