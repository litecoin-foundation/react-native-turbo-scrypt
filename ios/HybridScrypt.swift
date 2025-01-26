import Foundation
import CryptoSwift
import NitroModules

class HybridScrypt: HybridScryptSpec {
    func scrypt(password: ArrayBufferHolder, salt: ArrayBufferHolder, N: Double, r: Double, p: Double, size: Double) throws -> ArrayBufferHolder {
        // Convert ArrayBufferHolder to Data
        let passwordData = Data(bytes: password.data, count: password.size)
        let saltData = Data(bytes: salt.data, count: salt.size)
        
        let key = try Scrypt(password: passwordData.bytes, salt: saltData.bytes, dkLen: Int(size), N: Int(N), r: Int(r), p: Int(p)).calculate()
        
        // Convert the result back into an ArrayBufferHolder
        let keyPointer = UnsafeMutablePointer<UInt8>.allocate(capacity: key.count)
        keyPointer.initialize(from: key, count: key.count)
        
        return ArrayBufferHolder.wrap(dataWithoutCopy: keyPointer, size: key.count) {
            keyPointer.deallocate()
        }
    }
}
