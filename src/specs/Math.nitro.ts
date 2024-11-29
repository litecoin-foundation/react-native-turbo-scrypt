import type { HybridObject } from 'react-native-nitro-modules'

export interface Math extends HybridObject<{ ios: 'swift' }> {
  readonly pi: number
  add(a: number, b: number): number
}
