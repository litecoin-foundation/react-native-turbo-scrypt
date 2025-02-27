///
/// HybridScryptSpec_cxx.swift
/// This file was generated by nitrogen. DO NOT MODIFY THIS FILE.
/// https://github.com/mrousavy/nitro
/// Copyright © 2025 Marc Rousavy @ Margelo
///

import Foundation
import NitroModules

/**
 * A class implementation that bridges HybridScryptSpec over to C++.
 * In C++, we cannot use Swift protocols - so we need to wrap it in a class to make it strongly defined.
 *
 * Also, some Swift types need to be bridged with special handling:
 * - Enums need to be wrapped in Structs, otherwise they cannot be accessed bi-directionally (Swift bug: https://github.com/swiftlang/swift/issues/75330)
 * - Other HybridObjects need to be wrapped/unwrapped from the Swift TCxx wrapper
 * - Throwing methods need to be wrapped with a Result<T, Error> type, as exceptions cannot be propagated to C++
 */
public class HybridScryptSpec_cxx {
  /**
   * The Swift <> C++ bridge's namespace (`margelo::nitro::TurboScrypt::bridge::swift`)
   * from `TurboScryptiOS-Swift-Cxx-Bridge.hpp`.
   * This contains specialized C++ templates, and C++ helper functions that can be accessed from Swift.
   */
  public typealias bridge = margelo.nitro.TurboScrypt.bridge.swift

  /**
   * Holds an instance of the `HybridScryptSpec` Swift protocol.
   */
  private var __implementation: any HybridScryptSpec

  /**
   * Holds a weak pointer to the C++ class that wraps the Swift class.
   */
  private var __cxxPart: bridge.std__weak_ptr_margelo__nitro__TurboScrypt__HybridScryptSpec_

  /**
   * Create a new `HybridScryptSpec_cxx` that wraps the given `HybridScryptSpec`.
   * All properties and methods bridge to C++ types.
   */
  public init(_ implementation: any HybridScryptSpec) {
    self.__implementation = implementation
    self.__cxxPart = .init()
    /* no base class */
  }

  /**
   * Get the actual `HybridScryptSpec` instance this class wraps.
   */
  @inline(__always)
  public func getHybridScryptSpec() -> any HybridScryptSpec {
    return __implementation
  }

  /**
   * Casts this instance to a retained unsafe raw pointer.
   * This acquires one additional strong reference on the object!
   */
  public func toUnsafe() -> UnsafeMutableRawPointer {
    return Unmanaged.passRetained(self).toOpaque()
  }

  /**
   * Casts an unsafe pointer to a `HybridScryptSpec_cxx`.
   * The pointer has to be a retained opaque `Unmanaged<HybridScryptSpec_cxx>`.
   * This removes one strong reference from the object!
   */
  public class func fromUnsafe(_ pointer: UnsafeMutableRawPointer) -> HybridScryptSpec_cxx {
    return Unmanaged<HybridScryptSpec_cxx>.fromOpaque(pointer).takeRetainedValue()
  }

  /**
   * Gets (or creates) the C++ part of this Hybrid Object.
   * The C++ part is a `std::shared_ptr<margelo::nitro::TurboScrypt::HybridScryptSpec>`.
   */
  public func getCxxPart() -> bridge.std__shared_ptr_margelo__nitro__TurboScrypt__HybridScryptSpec_ {
    let cachedCxxPart = self.__cxxPart.lock()
    if cachedCxxPart.__convertToBool() {
      return cachedCxxPart
    } else {
      let newCxxPart = bridge.create_std__shared_ptr_margelo__nitro__TurboScrypt__HybridScryptSpec_(self.toUnsafe())
      __cxxPart = bridge.weakify_std__shared_ptr_margelo__nitro__TurboScrypt__HybridScryptSpec_(newCxxPart)
      return newCxxPart
    }
  }

  

  /**
   * Get the memory size of the Swift class (plus size of any other allocations)
   * so the JS VM can properly track it and garbage-collect the JS object if needed.
   */
  @inline(__always)
  public var memorySize: Int {
    return MemoryHelper.getSizeOf(self.__implementation) + self.__implementation.memorySize
  }

  // Properties
  

  // Methods
  @inline(__always)
  public func scrypt(password: ArrayBufferHolder, salt: ArrayBufferHolder, N: Double, r: Double, p: Double, size: Double) -> bridge.Result_std__shared_ptr_ArrayBuffer__ {
    do {
      let __result = try self.__implementation.scrypt(password: password, salt: salt, N: N, r: r, p: p, size: size)
      let __resultCpp = __result.getArrayBuffer()
      return bridge.create_Result_std__shared_ptr_ArrayBuffer__(__resultCpp)
    } catch (let __error) {
      let __exceptionPtr = __error.toCpp()
      return bridge.create_Result_std__shared_ptr_ArrayBuffer__(__exceptionPtr)
    }
  }
}
