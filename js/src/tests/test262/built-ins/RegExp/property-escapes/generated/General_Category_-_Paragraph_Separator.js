// |reftest| skip -- regexp-unicode-property-escapes is not supported
// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `General_Category=Paragraph_Separator`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v10.0.0
  Emoji v5.0 (UTR51)
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x002029
  ],
  ranges: []
});
testPropertyEscapes(
  /^\p{General_Category=Paragraph_Separator}+$/u,
  matchSymbols,
  "\\p{General_Category=Paragraph_Separator}"
);
testPropertyEscapes(
  /^\p{General_Category=Zp}+$/u,
  matchSymbols,
  "\\p{General_Category=Zp}"
);
testPropertyEscapes(
  /^\p{gc=Paragraph_Separator}+$/u,
  matchSymbols,
  "\\p{gc=Paragraph_Separator}"
);
testPropertyEscapes(
  /^\p{gc=Zp}+$/u,
  matchSymbols,
  "\\p{gc=Zp}"
);
testPropertyEscapes(
  /^\p{Paragraph_Separator}+$/u,
  matchSymbols,
  "\\p{Paragraph_Separator}"
);
testPropertyEscapes(
  /^\p{Zp}+$/u,
  matchSymbols,
  "\\p{Zp}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x002028],
    [0x00202A, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{General_Category=Paragraph_Separator}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Paragraph_Separator}"
);
testPropertyEscapes(
  /^\P{General_Category=Zp}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Zp}"
);
testPropertyEscapes(
  /^\P{gc=Paragraph_Separator}+$/u,
  nonMatchSymbols,
  "\\P{gc=Paragraph_Separator}"
);
testPropertyEscapes(
  /^\P{gc=Zp}+$/u,
  nonMatchSymbols,
  "\\P{gc=Zp}"
);
testPropertyEscapes(
  /^\P{Paragraph_Separator}+$/u,
  nonMatchSymbols,
  "\\P{Paragraph_Separator}"
);
testPropertyEscapes(
  /^\P{Zp}+$/u,
  nonMatchSymbols,
  "\\P{Zp}"
);

reportCompare(0, 0);
