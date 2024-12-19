import type { HybridObject } from 'react-native-nitro-modules'

export interface Scrypt extends HybridObject<{ ios: 'swift' }> {
  scrypt(
    password: ArrayBuffer,
    salt: ArrayBuffer,
    N: number,
    r: number,
    p: number,
    size: number
  ): ArrayBuffer
}
