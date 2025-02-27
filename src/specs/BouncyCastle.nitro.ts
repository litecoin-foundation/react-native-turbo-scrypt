import type { HybridObject } from 'react-native-nitro-modules'

export interface Poopy extends HybridObject<{ android: 'kotlin' }> {
  scrypt(
    password: ArrayBuffer,
    salt: ArrayBuffer,
    N: number,
    r: number,
    p: number,
    size: number
  ): ArrayBuffer
}
