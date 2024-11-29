import type { HybridObject } from 'react-native-nitro-modules'

export interface Scrypt extends HybridObject<{ ios: 'swift' }> {
  scrypt(
    password: string,
    salt: string,
    N: number,
    r: number,
    p: number,
    size: number
  ): string
}
