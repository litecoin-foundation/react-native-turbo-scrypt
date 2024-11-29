import { NitroModules } from 'react-native-nitro-modules'
import type { Scrypt as ScryptInterface } from './specs/CryptoSwift.nitro'

export const Scrypt = NitroModules.createHybridObject<ScryptInterface>('Scrypt')
