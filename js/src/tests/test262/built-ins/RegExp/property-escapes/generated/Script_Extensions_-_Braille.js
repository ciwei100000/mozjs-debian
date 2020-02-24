// |reftest| skip -- regexp-unicode-property-escapes is not supported
// Copyright 2019 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Braille`
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
    [0x002800, 0x0028FF]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Braille}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Braille}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Brai}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Brai}"
);
testPropertyEscapes(
  /^\p{scx=Braille}+$/u,
  matchSymbols,
  "\\p{scx=Braille}"
);
testPropertyEscapes(
  /^\p{scx=Brai}+$/u,
  matchSymbols,
  "\\p{scx=Brai}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x0027FF],
    [0x002900, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Braille}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Braille}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Brai}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Brai}"
);
testPropertyEscapes(
  /^\P{scx=Braille}+$/u,
  nonMatchSymbols,
  "\\P{scx=Braille}"
);
testPropertyEscapes(
  /^\P{scx=Brai}+$/u,
  nonMatchSymbols,
  "\\P{scx=Brai}"
);

reportCompare(0, 0);
