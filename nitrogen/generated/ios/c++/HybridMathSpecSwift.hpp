///
/// HybridMathSpecSwift.hpp
/// This file was generated by nitrogen. DO NOT MODIFY THIS FILE.
/// https://github.com/mrousavy/nitro
/// Copyright © 2024 Marc Rousavy @ Margelo
///

#pragma once

#include "HybridMathSpec.hpp"

// Forward declaration of `HybridMathSpecCxx` to properly resolve imports.
namespace TurboScryptiOS { class HybridMathSpecCxx; }





#if __has_include(<NitroModules/HybridContext.hpp>)
#include <NitroModules/HybridContext.hpp>
#else
#error NitroModules cannot be found! Are you sure you installed NitroModules properly?
#endif

#include "TurboScryptiOS-Swift-Cxx-Umbrella.hpp"

namespace margelo::nitro::TurboScrypt {

  /**
   * The C++ part of HybridMathSpecCxx.swift.
   *
   * HybridMathSpecSwift (C++) accesses HybridMathSpecCxx (Swift), and might
   * contain some additional bridging code for C++ <> Swift interop.
   *
   * Since this obviously introduces an overhead, I hope at some point in
   * the future, HybridMathSpecCxx can directly inherit from the C++ class HybridMathSpec
   * to simplify the whole structure and memory management.
   */
  class HybridMathSpecSwift: public virtual HybridMathSpec {
  public:
    // Constructor from a Swift instance
    explicit HybridMathSpecSwift(const TurboScryptiOS::HybridMathSpecCxx& swiftPart):
      HybridObject(HybridMathSpec::TAG),
      _swiftPart(swiftPart) { }

  public:
    // Get the Swift part
    inline TurboScryptiOS::HybridMathSpecCxx getSwiftPart() noexcept { return _swiftPart; }

  public:
    // Get memory pressure
    inline size_t getExternalMemorySize() noexcept override {
      return _swiftPart.getMemorySize();
    }

  public:
    // Properties
    inline double getPi() noexcept override {
      return _swiftPart.getPi();
    }

  public:
    // Methods
    inline double add(double a, double b) override {
      auto __result = _swiftPart.add(std::forward<decltype(a)>(a), std::forward<decltype(b)>(b));
      return __result;
    }

  private:
    TurboScryptiOS::HybridMathSpecCxx _swiftPart;
  };

} // namespace margelo::nitro::TurboScrypt
