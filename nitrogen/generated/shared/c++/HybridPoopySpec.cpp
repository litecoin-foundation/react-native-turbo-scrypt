///
/// HybridPoopySpec.cpp
/// This file was generated by nitrogen. DO NOT MODIFY THIS FILE.
/// https://github.com/mrousavy/nitro
/// Copyright © 2024 Marc Rousavy @ Margelo
///

#include "HybridPoopySpec.hpp"

namespace margelo::nitro::TurboScrypt {

  void HybridPoopySpec::loadHybridMethods() {
    // load base methods/properties
    HybridObject::loadHybridMethods();
    // load custom methods/properties
    registerHybrids(this, [](Prototype& prototype) {
      prototype.registerHybridMethod("scrypt", &HybridPoopySpec::scrypt);
    });
  }

} // namespace margelo::nitro::TurboScrypt