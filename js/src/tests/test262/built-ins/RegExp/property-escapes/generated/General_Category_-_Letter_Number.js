// |reftest| skip -- regexp-unicode-property-escapes is not supported
// Copyright 2019 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `General_Category=Letter_Number`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v12.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x003007,
    0x010341,
    0x01034A
  ],
  ranges: [
    [0x0016EE, 0x0016F0],
    [0x002160, 0x002182],
    [0x002185, 0x002188],
    [0x003021, 0x003029],
    [0x003038, 0x00303A],
    [0x00A6E6, 0x00A6EF],
    [0x010140, 0x010174],
    [0x0103D1, 0x0103D5],
    [0x012400, 0x01246E]
  ]
});
testPropertyEscapes(
  /^\p{General_Category=Letter_Number}+$/u,
  matchSymbols,
  "\\p{General_Category=Letter_Number}"
);
testPropertyEscapes(
  /^\p{General_Category=Nl}+$/u,
  matchSymbols,
  "\\p{General_Category=Nl}"
);
testPropertyEscapes(
  /^\p{gc=Letter_Number}+$/u,
  matchSymbols,
  "\\p{gc=Letter_Number}"
);
testPropertyEscapes(
  /^\p{gc=Nl}+$/u,
  matchSymbols,
  "\\p{gc=Nl}"
);
testPropertyEscapes(
  /^\p{Letter_Number}+$/u,
  matchSymbols,
  "\\p{Letter_Number}"
);
testPropertyEscapes(
  /^\p{Nl}+$/u,
  matchSymbols,
  "\\p{Nl}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x0016ED],
    [0x0016F1, 0x00215F],
    [0x002183, 0x002184],
    [0x002189, 0x003006],
    [0x003008, 0x003020],
    [0x00302A, 0x003037],
    [0x00303B, 0x00A6E5],
    [0x00A6F0, 0x00DBFF],
    [0x00E000, 0x01013F],
    [0x010175, 0x010340],
    [0x010342, 0x010349],
    [0x01034B, 0x0103D0],
    [0x0103D6, 0x0123FF],
    [0x01246F, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{General_Category=Letter_Number}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Letter_Number}"
);
testPropertyEscapes(
  /^\P{General_Category=Nl}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Nl}"
);
testPropertyEscapes(
  /^\P{gc=Letter_Number}+$/u,
  nonMatchSymbols,
  "\\P{gc=Letter_Number}"
);
testPropertyEscapes(
  /^\P{gc=Nl}+$/u,
  nonMatchSymbols,
  "\\P{gc=Nl}"
);
testPropertyEscapes(
  /^\P{Letter_Number}+$/u,
  nonMatchSymbols,
  "\\P{Letter_Number}"
);
testPropertyEscapes(
  /^\P{Nl}+$/u,
  nonMatchSymbols,
  "\\P{Nl}"
);

reportCompare(0, 0);
