import Foundation
import CryptoSwift
import NitroModules

class HybridScrypt: HybridScryptSpec {
    var hybridContext = margelo.nitro.HybridContext()
    var memorySize: Int {
        return getSizeOf(self)
    }

    func scrypt(password: ArrayBufferHolder, salt: ArrayBufferHolder, N: Double, r: Double, p: Double, size: Double) throws -> ArrayBufferHolder {
        // Convert ArrayBufferHolder to Array<UInt8>
        let passwordArray = Array(UnsafeBufferPointer(start: password.data.assumingMemoryBound(to: UInt8.self), count: password.size))
        let saltArray = Array(UnsafeBufferPointer(start: salt.data.assumingMemoryBound(to: UInt8.self), count: salt.size))
        
        do {
            let key = try Scrypt(password: passwordArray, salt: saltArray, dkLen: Int(size), N: Int(N), r: Int(r), p: Int(p)).calculate()
            
            // Convert the result back into an ArrayBufferHolder
            let resultData = UnsafeMutablePointer<UInt8>.allocate(capacity: key.count)
                resultData.initialize(from: key, count: key.count)
                    
            return ArrayBufferHolder.wrap(dataWithoutCopy: resultData, size: key.count) {
                resultData.deallocate()
            }
        } catch {
            throw error
        }
    }
}
