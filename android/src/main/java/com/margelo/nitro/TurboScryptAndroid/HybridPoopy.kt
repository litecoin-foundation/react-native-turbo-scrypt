package com.margelo.nitro.TurboScryptAndroid

import com.margelo.nitro.core.ArrayBuffer
import java.nio.ByteBuffer
import org.bouncycastle.crypto.generators.SCrypt

class HybridPoopy : HybridPoopySpec() {
    companion object {
        const val TAG = "HybridPoopy"
    }

    override val memorySize: Long
        get() = 0L

    override fun scrypt(
            password: ArrayBuffer,
            salt: ArrayBuffer,
            N: Double,
            r: Double,
            p: Double,
            size: Double
    ): ArrayBuffer {
        val passwordBuffer = password.getBuffer(true).array()
        val saltBuffer = salt.getBuffer(true).array()

        // ByteArray
        val derivedKey =
                SCrypt.generate(
                        passwordBuffer,
                        saltBuffer,
                        N.toInt(),
                        r.toInt(),
                        p.toInt(),
                        size.toInt()
                )
        // ByteArray to ByteBuffer
        val keyBuffer = ByteBuffer.wrap(derivedKey)
        while (keyBuffer.hasRemaining()) {
            println(keyBuffer.get())
        }

        // ByteBuffer -> ArrayBuffer
        return ArrayBuffer(keyBuffer)
    }
}
