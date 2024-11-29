import { NitroModules } from 'react-native-nitro-modules'
import type { Math as MathInterface } from './specs/Math.nitro'

export const Math = NitroModules.createHybridObject<MathInterface>('Math')
