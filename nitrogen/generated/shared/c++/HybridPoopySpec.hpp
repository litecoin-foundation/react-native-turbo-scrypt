///
/// HybridPoopySpec.hpp
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



#include <string>

namespace margelo::nitro::TurboScrypt {

  using namespace margelo::nitro;

  /**
   * An abstract base class for `Poopy`
   * Inherit this class to create instances of `HybridPoopySpec` in C++.
   * You must explicitly call `HybridObject`'s constructor yourself, because it is virtual.
   * @example
   * ```cpp
   * class HybridPoopy: public HybridPoopySpec {
   * public:
   *   HybridPoopy(...): HybridObject(TAG) { ... }
   *   // ...
   * };
   * ```
   */
  class HybridPoopySpec: public virtual HybridObject {
    public:
      // Constructor
      explicit HybridPoopySpec(): HybridObject(TAG) { }

      // Destructor
      virtual ~HybridPoopySpec() { }

    public:
      // Properties
      

    public:
      // Methods
      virtual std::string scrypt(const std::string& password, const std::string& salt, double N, double r, double p, double size) = 0;

    protected:
      // Hybrid Setup
      void loadHybridMethods() override;

    protected:
      // Tag for logging
      static constexpr auto TAG = "Poopy";
  };

} // namespace margelo::nitro::TurboScrypt
