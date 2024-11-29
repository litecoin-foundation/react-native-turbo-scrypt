///
/// TurboScryptCxxLibOnLoad.cpp
/// This file was generated by nitrogen. DO NOT MODIFY THIS FILE.
/// https://github.com/mrousavy/nitro
/// Copyright © 2024 Marc Rousavy @ Margelo
///

#include "TurboScryptCxxLibOnLoad.hpp"

#include <jni.h>
#include <fbjni/fbjni.h>
#include <NitroModules/HybridObjectRegistry.hpp>

#include "JHybridPoopySpec.hpp"
#include <NitroModules/JNISharedPtr.hpp>
#include <NitroModules/DefaultConstructableObject.hpp>

namespace margelo::nitro::TurboScrypt {

int initialize(JavaVM* vm) {
  using namespace margelo::nitro;
  using namespace margelo::nitro::TurboScrypt;
  using namespace facebook;

  return facebook::jni::initialize(vm, [] {
    // Register native JNI methods
    margelo::nitro::TurboScrypt::JHybridPoopySpec::registerNatives();

    // Register Nitro Hybrid Objects
    HybridObjectRegistry::registerHybridObjectConstructor(
      "Poopy",
      []() -> std::shared_ptr<HybridObject> {
        static DefaultConstructableObject<JHybridPoopySpec::javaobject> object("com/margelo/nitro/TurboScryptAndroid/HybridPoopy");
        auto instance = object.create();
        auto globalRef = jni::make_global(instance);
        return JNISharedPtr::make_shared_from_jni<JHybridPoopySpec>(globalRef);
      }
    );
  });
}

} // namespace margelo::nitro::TurboScrypt
