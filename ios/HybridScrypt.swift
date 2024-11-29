import Foundation
import CryptoSwift

class HybridScrypt: HybridScryptSpec {
    var hybridContext = margelo.nitro.HybridContext()
    var memorySize: Int {
        return getSizeOf(self)
    }

    func scrypt(password: String, salt: String, N: Double, r: Double, p: Double, size: Double) throws -> String {
        let password: Array<UInt8> = Array(password.utf8)
        let salt: Array<UInt8> = Array(salt.utf8)
        
        do {
            let key = try Scrypt(password: password, salt: salt, dkLen: Int(size), N: Int(N), r: Int(r), p: Int(p)).calculate()
            return key.toHexString()
        } catch {
            return ""
        }
    }
}
