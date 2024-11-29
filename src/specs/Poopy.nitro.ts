import type { HybridObject } from 'react-native-nitro-modules'

export interface Poopy extends HybridObject<{ android: 'kotlin' }> {
  scrypt(
    password: string,
    salt: string,
    N: number,
    r: number,
    p: number,
    size: number
  ): string
}
