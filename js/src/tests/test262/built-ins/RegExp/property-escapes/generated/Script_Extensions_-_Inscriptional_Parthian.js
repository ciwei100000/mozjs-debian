// |reftest| skip -- regexp-unicode-property-escapes is not supported
// Copyright 2019 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Inscriptional_Parthian`
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
    [0x010B40, 0x010B55],
    [0x010B58, 0x010B5F]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Inscriptional_Parthian}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Inscriptional_Parthian}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Prti}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Prti}"
);
testPropertyEscapes(
  /^\p{scx=Inscriptional_Parthian}+$/u,
  matchSymbols,
  "\\p{scx=Inscriptional_Parthian}"
);
testPropertyEscapes(
  /^\p{scx=Prti}+$/u,
  matchSymbols,
  "\\p{scx=Prti}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x010B3F],
    [0x010B56, 0x010B57],
    [0x010B60, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Inscriptional_Parthian}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Inscriptional_Parthian}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Prti}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Prti}"
);
testPropertyEscapes(
  /^\P{scx=Inscriptional_Parthian}+$/u,
  nonMatchSymbols,
  "\\P{scx=Inscriptional_Parthian}"
);
testPropertyEscapes(
  /^\P{scx=Prti}+$/u,
  nonMatchSymbols,
  "\\P{scx=Prti}"
);

reportCompare(0, 0);
