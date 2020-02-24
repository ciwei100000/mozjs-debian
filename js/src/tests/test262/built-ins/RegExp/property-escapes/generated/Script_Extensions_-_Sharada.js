// |reftest| skip -- regexp-unicode-property-escapes is not supported
// Copyright 2019 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Sharada`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v12.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x000951,
    0x001CD7,
    0x001CD9,
    0x001CE0
  ],
  ranges: [
    [0x001CDC, 0x001CDD],
    [0x011180, 0x0111CD],
    [0x0111D0, 0x0111DF]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Sharada}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Sharada}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Shrd}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Shrd}"
);
testPropertyEscapes(
  /^\p{scx=Sharada}+$/u,
  matchSymbols,
  "\\p{scx=Sharada}"
);
testPropertyEscapes(
  /^\p{scx=Shrd}+$/u,
  matchSymbols,
  "\\p{scx=Shrd}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x001CD8
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000950],
    [0x000952, 0x001CD6],
    [0x001CDA, 0x001CDB],
    [0x001CDE, 0x001CDF],
    [0x001CE1, 0x00DBFF],
    [0x00E000, 0x01117F],
    [0x0111CE, 0x0111CF],
    [0x0111E0, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Sharada}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Sharada}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Shrd}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Shrd}"
);
testPropertyEscapes(
  /^\P{scx=Sharada}+$/u,
  nonMatchSymbols,
  "\\P{scx=Sharada}"
);
testPropertyEscapes(
  /^\P{scx=Shrd}+$/u,
  nonMatchSymbols,
  "\\P{scx=Shrd}"
);

reportCompare(0, 0);
