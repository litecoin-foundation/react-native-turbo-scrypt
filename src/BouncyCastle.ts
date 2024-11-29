import { NitroModules } from 'react-native-nitro-modules'
import type { Poopy as PoopyInterface } from './specs/Poopy.nitro'

export const BouncyCastle =
  NitroModules.createHybridObject<PoopyInterface>('Poopy')
