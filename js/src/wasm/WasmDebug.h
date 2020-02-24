/* -*- Mode: C++; tab-width: 8; indent-tabs-mode: nil; c-basic-offset: 2 -*-
 * vim: set ts=8 sts=2 et sw=2 tw=80:
 *
 * Copyright 2016 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#ifndef wasm_debug_h
#define wasm_debug_h

#include "js/HashTable.h"
#include "wasm/WasmModule.h"
#include "wasm/WasmTypes.h"

namespace js {

class Debugger;
class WasmBreakpoint;
class WasmBreakpointSite;
class WasmInstanceObject;

namespace wasm {

struct MetadataTier;

// The generated source location for the AST node/expression. The offset field
// refers an offset in an binary format file.

struct ExprLoc {
  uint32_t lineno;
  uint32_t column;
  uint32_t offset;
  ExprLoc() : lineno(0), column(0), offset(0) {}
  ExprLoc(uint32_t lineno_, uint32_t column_, uint32_t offset_)
      : lineno(lineno_), column(column_), offset(offset_) {}
};

typedef HashMap<uint32_t, uint32_t, DefaultHasher<uint32_t>, SystemAllocPolicy>
    StepModeCounters;
typedef HashMap<uint32_t, WasmBreakpointSite*, DefaultHasher<uint32_t>,
                SystemAllocPolicy>
    WasmBreakpointSiteMap;

class DebugState {
  const SharedCode code_;
  const SharedModule module_;

  // State maintained when debugging is enabled. In this case, the Code is
  // not actually shared, but is referenced uniquely by the instance that is
  // being debugged.

  bool enterFrameTrapsEnabled_;
  uint32_t enterAndLeaveFrameTrapsCounter_;
  WasmBreakpointSiteMap breakpointSites_;
  StepModeCounters stepModeCounters_;

  void toggleDebugTrap(uint32_t offset, bool enabled);

 public:
  DebugState(const Code& code, const Module& module);

  const Bytes& bytecode() const { return module_->debugBytecode(); }

  bool getLineOffsets(JSContext* cx, size_t lineno, Vector<uint32_t>* offsets);
  bool getAllColumnOffsets(JSContext* cx, Vector<ExprLoc>* offsets);
  bool getOffsetLocation(uint32_t offset, size_t* lineno, size_t* column);

  // The Code can track enter/leave frame events. Any such event triggers
  // debug trap. The enter/leave frame events enabled or disabled across
  // all functions.

  void adjustEnterAndLeaveFrameTrapsState(JSContext* cx, bool enabled);
  void ensureEnterFrameTrapsState(JSContext* cx, bool enabled);
  bool enterFrameTrapsEnabled() const { return enterFrameTrapsEnabled_; }

  // When the Code is debugEnabled, individual breakpoints can be enabled or
  // disabled at instruction offsets.

  bool hasBreakpointTrapAtOffset(uint32_t offset);
  void toggleBreakpointTrap(JSRuntime* rt, uint32_t offset, bool enabled);
  WasmBreakpointSite* getOrCreateBreakpointSite(JSContext* cx, uint32_t offset);
  bool hasBreakpointSite(uint32_t offset);
  void destroyBreakpointSite(FreeOp* fop, uint32_t offset);
  void clearBreakpointsIn(FreeOp* fp, WasmInstanceObject* instance,
                          js::Debugger* dbg, JSObject* handler);
  void clearAllBreakpoints(FreeOp* fp, WasmInstanceObject* instance);

  // When the Code is debug-enabled, single-stepping mode can be toggled on
  // the granularity of individual functions.

  bool stepModeEnabled(uint32_t funcIndex) const;
  bool incrementStepModeCount(JSContext* cx, uint32_t funcIndex);
  bool decrementStepModeCount(FreeOp* fop, uint32_t funcIndex);

  // Stack inspection helpers.

  bool debugGetLocalTypes(uint32_t funcIndex, ValTypeVector* locals,
                          size_t* argsLength);
  ExprType debugGetResultType(uint32_t funcIndex);
  bool getGlobal(Instance& instance, uint32_t globalIndex,
                 MutableHandleValue vp);

  // Debug URL helpers.

  bool getSourceMappingURL(JSContext* cx, MutableHandleString result) const;

  // Accessors for commonly used elements of linked structures.

  const MetadataTier& metadata(Tier t) const { return code_->metadata(t); }
  const Metadata& metadata() const { return code_->metadata(); }
  const CodeRangeVector& codeRanges(Tier t) const {
    return metadata(t).codeRanges;
  }
  const CallSiteVector& callSites(Tier t) const {
    return metadata(t).callSites;
  }

  uint32_t funcToCodeRangeIndex(uint32_t funcIndex) const {
    return metadata(Tier::Debug).funcToCodeRange[funcIndex];
  }

  // about:memory reporting:

  void addSizeOfMisc(MallocSizeOf mallocSizeOf, Metadata::SeenSet* seenMetadata,
                     ShareableBytes::SeenSet* seenBytes,
                     Code::SeenSet* seenCode, size_t* code, size_t* data) const;
};

typedef UniquePtr<DebugState> UniqueDebugState;

}  // namespace wasm
}  // namespace js

#endif  // wasm_debug_h
