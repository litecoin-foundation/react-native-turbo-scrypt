#include <jni.h>
#include "TurboScryptCxxLibOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::TurboScrypt::initialize(vm);
}
