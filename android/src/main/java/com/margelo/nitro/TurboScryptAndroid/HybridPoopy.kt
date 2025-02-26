package com.margelo.nitro.TurboScryptAndroid

import com.facebook.react.uimanager.ThemedReactContext
import com.margelo.nitro.core.ArrayBuffer
import java.nio.ByteBuffer
import org.bouncycastle.crypto.generators.SCrypt

class HybridPoopy(val context: ThemedReactContext) : HybridPoopySpec() {
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

        // TODO
        // for some unknown reason, in the kotlin side, the byte[] for salt & password
        // have 4 additional 0 bytes at the front, and 3 additional 0 bytes at the end.
        // so we trim these bytes out!
        val passwordBufferArray = passwordBuffer.copyOfRange(4, passwordBuffer.size - 3)
        val saltBufferArray = saltBuffer.copyOfRange(4, saltBuffer.size - 3)

        // ByteArray
        val derivedKey =
                SCrypt.generate(
                        passwordBufferArray,
                        saltBufferArray,
                        N.toInt(),
                        r.toInt(),
                        p.toInt(),
                        size.toInt()
                )

        // ByteArray to ByteBuffer
        val keyBuffer = ByteBuffer.allocateDirect(derivedKey.size)
        keyBuffer.put(derivedKey)
        keyBuffer.rewind()

        // ByteBuffer -> ArrayBuffer
        return ArrayBuffer(keyBuffer)
    }
}
