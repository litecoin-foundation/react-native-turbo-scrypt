# react-native-turbo-scrypt

Fastest Scrypt library for React Native, supporting new architecture and using nitromodules for blazingly fast performance.

This library does not reimplement Scrypt, but instead simply binds Scrypt from [CryptoSwift](https://github.com/krzyzanowskim/CryptoSwift) (iOS) & [BouncyCastle](https://www.bouncycastle.org/) (Android).

## Usage

```tsx
import {Scrypt} from 'react-native-turbo-scrypt';

const hexString = Scrypt.scrypt(
      'password',                // password: string
      'salt',                    // salt: string
       32768,                    // N: number
       8,                        // r: number
       1,                        // p: number
       32,                       // key length: number
);
```
The result is a hex encoded string. To decode result to a UInt8Array:
``` tsx
const buffer = Buffer.from(hexString, 'hex');
const uint8Array = new Uint8Array (buffer);
```

## Installation
```bash
$ bun i react-native-turbo-scrypt
```

## Performance

Testing on an iPhone 13 Pro Max, compared to `@noble/hashes` js implementation of Scrypt, we are able to achieve a 18.5s time saving with the params in the usage example. Typically in release mode, Scrypt.scrypt() takes around 150-180ms on an iPhone 13 Pro Max. On a Samsung S24 Ultra, we observe typical times of 400-500ms.

**NOTICE:**

We are aware of an issue on iOS devices, where in Debug apps, `Scrypt.scrypt()` takes approx 3-4s instead of the expected 150ms performance. This may be due to the lack of Whole-Module optimisation on debug builds. We would appreciate pull request fixing this issue.
