import { NitroModules } from 'react-native-nitro-modules'
// import type { Scrypt as ScryptInterface } from './specs/CryptoSwift.nitro'
import type { HybridPoopy as PoopyInterface } from './specs/Poopy.nitro'

// export const Scrypt = NitroModules.createHybridObject<ScryptInterface>('Scrypt')
export const HybridPoopy =
  NitroModules.createHybridObject<PoopyInterface>('Poopy')
