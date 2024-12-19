///
/// HybridScryptSpec.hpp
/// This file was generated by nitrogen. DO NOT MODIFY THIS FILE.
/// https://github.com/mrousavy/nitro
/// Copyright © 2024 Marc Rousavy @ Margelo
///

#pragma once

#if __has_include(<NitroModules/HybridObject.hpp>)
#include <NitroModules/HybridObject.hpp>
#else
#error NitroModules cannot be found! Are you sure you installed NitroModules properly?
#endif

// Forward declaration of `ArrayBuffer` to properly resolve imports.
namespace NitroModules { class ArrayBuffer; }

#include <NitroModules/ArrayBuffer.hpp>

namespace margelo::nitro::TurboScrypt {

  using namespace margelo::nitro;

  /**
   * An abstract base class for `Scrypt`
   * Inherit this class to create instances of `HybridScryptSpec` in C++.
   * You must explicitly call `HybridObject`'s constructor yourself, because it is virtual.
   * @example
   * ```cpp
   * class HybridScrypt: public HybridScryptSpec {
   * public:
   *   HybridScrypt(...): HybridObject(TAG) { ... }
   *   // ...
   * };
   * ```
   */
  class HybridScryptSpec: public virtual HybridObject {
    public:
      // Constructor
      explicit HybridScryptSpec(): HybridObject(TAG) { }

      // Destructor
      virtual ~HybridScryptSpec() { }

    public:
      // Properties
      

    public:
      // Methods
      virtual std::shared_ptr<ArrayBuffer> scrypt(const std::shared_ptr<ArrayBuffer>& password, const std::shared_ptr<ArrayBuffer>& salt, double N, double r, double p, double size) = 0;

    protected:
      // Hybrid Setup
      void loadHybridMethods() override;

    protected:
      // Tag for logging
      static constexpr auto TAG = "Scrypt";
  };

} // namespace margelo::nitro::TurboScrypt
