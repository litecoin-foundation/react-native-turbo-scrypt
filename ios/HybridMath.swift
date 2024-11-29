class HybridMath: HybridMathSpec {
    var hybridContext = margelo.nitro.HybridContext()
    var memorySize: Int {
        return getSizeOf(self)
    }
    
    var pi: Double {
        return Double.pi
    }
    func add(a: Double, b: Double) -> Double {
        return a + b
    }
}
