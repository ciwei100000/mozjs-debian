// Copyright 2011 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A simple interpreter for the Irregexp byte code.

#ifndef V8_REGEXP_REGEXP_INTERPRETER_H_
#define V8_REGEXP_REGEXP_INTERPRETER_H_

#include "new-regexp/regexp.h"

namespace v8 {
namespace internal {

class V8_EXPORT_PRIVATE IrregexpInterpreter : public AllStatic {
 public:
  enum Result {
    FAILURE = RegExp::kInternalRegExpFailure,
    SUCCESS = RegExp::kInternalRegExpSuccess,
    EXCEPTION = RegExp::kInternalRegExpException,
    RETRY = RegExp::kInternalRegExpRetry,
  };

  // In case a StackOverflow occurs, a StackOverflowException is created and
  // EXCEPTION is returned.
  static Result MatchForCallFromRuntime(
      Isolate* isolate, Handle<JSRegExp> regexp, Handle<String> subject_string,
      int* output_registers, int output_register_count, int start_position);

  // In case a StackOverflow occurs, EXCEPTION is returned. The caller is
  // responsible for creating the exception.
  //
  // RETRY is returned if a retry through the runtime is needed (e.g. when
  // interrupts have been scheduled or the regexp is marked for tier-up).
  //
  // Arguments input_start, input_end and backtrack_stack are
  // unused. They are only passed to match the signature of the native irregex
  // code.
  //
  // Arguments output_registers and output_register_count describe the results
  // array, which will contain register values of all captures if SUCCESS is
  // returned. For all other return codes, the results array remains unmodified.
  static Result MatchForCallFromJs(Address subject, int32_t start_position,
                                   Address input_start, Address input_end,
                                   int* output_registers,
                                   int32_t output_register_count,
                                   Address backtrack_stack,
                                   RegExp::CallOrigin call_origin,
                                   Isolate* isolate, Address regexp);

  static Result MatchInternal(Isolate* isolate, ByteArray code_array,
                              String subject_string, int* output_registers,
                              int output_register_count,
                              int total_register_count, int start_position,
                              RegExp::CallOrigin call_origin,
                              uint32_t backtrack_limit);

 private:
  static Result Match(Isolate* isolate, JSRegExp regexp, String subject_string,
                      int* output_registers, int output_register_count,
                      int start_position, RegExp::CallOrigin call_origin);
};

}  // namespace internal
}  // namespace v8

#endif  // V8_REGEXP_REGEXP_INTERPRETER_H_
