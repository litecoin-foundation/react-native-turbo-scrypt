package com.margelo.nitro.TurboScryptAndroid

import org.bouncycastle.crypto.generators.SCrypt

class HybridPoopy : HybridPoopySpec() {
    companion object {
        const val TAG = "HybridPoopy"
    }

    override val memorySize: Long
        get() = 0L

    override fun scrypt(
            password: String,
            salt: String,
            N: Double,
            r: Double,
            p: Double,
            size: Double
    ): String {
        val password = password.toByteArray()
        val salt = salt.toByteArray()
        val derivedKey =
                SCrypt.generate(password, salt, N.toInt(), r.toInt(), p.toInt(), size.toInt())
        val hexString = derivedKey.joinToString("") { "%02x".format(it) }
        return hexString
    }
}
