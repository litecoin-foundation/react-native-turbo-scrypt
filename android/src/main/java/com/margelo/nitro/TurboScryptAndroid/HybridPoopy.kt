package com.margelo.nitro.TurboScryptAndroid

class HybridPoopy : HybridPoopySpec() {
    companion object {
        const val TAG = "HybridPoopy"
    }

    override val pi: Double
        get() = Math.PI

    override val memorySize: Long
        get() = 0L

    override fun add(a: Double, b: Double): Double {
        return a + b
    }
}
