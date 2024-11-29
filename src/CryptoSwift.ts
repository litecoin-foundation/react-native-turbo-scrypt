import { NitroModules } from 'react-native-nitro-modules'
import type { Scrypt as ScryptInterface } from './specs/CryptoSwift.nitro'

export const CryptoSwift =
  NitroModules.createHybridObject<ScryptInterface>('Scrypt')
