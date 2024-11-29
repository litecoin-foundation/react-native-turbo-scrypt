///
/// HybridPoopySpec.hpp
/// This file was generated by nitrogen. DO NOT MODIFY THIS FILE.
/// https://github.com/mrousavy/nitro
/// Copyright © 2024 Marc Rousavy @ Margelo
///

#pragma once

#include <NitroModules/JHybridObject.hpp>
#include <fbjni/fbjni.h>
#include "HybridPoopySpec.hpp"




namespace margelo::nitro::TurboScrypt {

  using namespace facebook;

  class JHybridPoopySpec: public jni::HybridClass<JHybridPoopySpec, JHybridObject>,
                          public virtual HybridPoopySpec {
  public:
    static auto constexpr kJavaDescriptor = "Lcom/margelo/nitro/TurboScryptAndroid/HybridPoopySpec;";
    static jni::local_ref<jhybriddata> initHybrid(jni::alias_ref<jhybridobject> jThis);
    static void registerNatives();

  protected:
    // C++ constructor (called from Java via `initHybrid()`)
    explicit JHybridPoopySpec(jni::alias_ref<jhybridobject> jThis) :
      HybridObject(HybridPoopySpec::TAG),
      _javaPart(jni::make_global(jThis)) {}

  public:
    virtual ~JHybridPoopySpec() {
      // Hermes GC can destroy JS objects on a non-JNI Thread.
      jni::ThreadScope::WithClassLoader([&] { _javaPart.reset(); });
    }

  public:
    size_t getExternalMemorySize() noexcept override;

  public:
    inline const jni::global_ref<JHybridPoopySpec::javaobject>& getJavaPart() const noexcept {
      return _javaPart;
    }

  public:
    // Properties
    double getPi() override;

  public:
    // Methods
    double add(double a, double b) override;

  private:
    friend HybridBase;
    using HybridBase::HybridBase;
    jni::global_ref<JHybridPoopySpec::javaobject> _javaPart;
  };

} // namespace margelo::nitro::TurboScrypt
