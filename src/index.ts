import { Platform } from 'react-native'

import { CryptoSwift } from './CryptoSwift'
import { BouncyCastle } from './BouncyCastle'

export const Scrypt = {
  scrypt: (
    password: ArrayBuffer,
    salt: ArrayBuffer,
    N: number,
    r: number,
    p: number,
    size: number
  ): ArrayBuffer => {
    const openNative = Platform.select({
      ios: () => CryptoSwift.scrypt(password, salt, N, r, p, size),
      android: () => BouncyCastle.scrypt(password, salt, N, r, p, size),
    })

    if (!openNative) {
      throw new Error('react-native-turbo-scrypt not support on this platform')
    }

    const res = openNative()
    return res
  },
}
