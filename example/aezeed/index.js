import React from 'react';
import {Buffer} from '@craftzdog/react-native-buffer';
import aez from 'aez';
import {Scrypt} from 'react-native-turbo-scrypt';

import {wordlist} from './bip39';
import lpad from './lpad';
import crc32c from './crc32c';

const AEZEED_VERSION = 0;
const BITCOIN_GENESIS_BLOCK_TIMESTAMP = 1231006505;
const SCRYPT_N = 32768;
const SCRYPT_R = 8;
const SCRYPT_P = 1;
const SCRYPT_KEY_LENGTH = 32;
const PLAINTEXT_LENGTH = 19;
const ENCIPHERED_LENGTH = 33;
const CHECKSUM_LENGTH = 4;
const CHECKSUM_OFFSET = ENCIPHERED_LENGTH - CHECKSUM_LENGTH;
const NUM_WORDS = 24;
const SALT_LENGTH = 5;
const AD_LENGTH = SALT_LENGTH + 1;
const AEZ_TAU = 4;
const SALT_OFFSET = CHECKSUM_OFFSET - SALT_LENGTH;

export const generateMnemonic = () => {
  return new Promise((resolve, reject) => {
    try {
      const passwordString = 'aezeed';
      const passwordBuffer = new TextEncoder().encode(passwordString).buffer;

      const salt = new ArrayBuffer(5);
      const saltView = new Uint8Array(salt);
      saltView.set([0x04, 0x08, 0x0c, 0x10, 0x00]);

      const entropy = '1b97b35ed7b349654c76fa3c3e4d2ef3';

      const key = Scrypt.scrypt(
        passwordBuffer,
        salt,
        SCRYPT_N,
        SCRYPT_R,
        SCRYPT_P,
        SCRYPT_KEY_LENGTH,
      );

      const keyUInt8Array = new Uint8Array(key);
      const saltBuffer = Buffer.from(salt);

      const cipherText = aez.encrypt(
        keyUInt8Array,
        null,
        [getAD(saltBuffer)],
        AEZ_TAU,
        getSeedBytes(entropy),
      );

      const mnemonicBytes = getMnemonicBytes(cipherText, saltBuffer);
      const mnemonic = seedToMnemonic(mnemonicBytes);
      console.log(mnemonic);
      const mnemonicArray = mnemonic.split(' ');
      resolve(mnemonicArray);
    } catch (error) {
      reject(error);
    }
  });
};

const getMnemonicBytes = (cipherText, salt) => {
  const mnemonicBytes = Buffer.alloc(ENCIPHERED_LENGTH);
  mnemonicBytes.writeUInt8(AEZEED_VERSION);
  cipherText.copy(mnemonicBytes, 1);
  salt.copy(mnemonicBytes, SALT_OFFSET);
  const checkSum = crc32c(mnemonicBytes.slice(0, CHECKSUM_OFFSET));
  mnemonicBytes.writeUInt32BE(checkSum, CHECKSUM_OFFSET);
  return mnemonicBytes;
};

const getAD = salt => {
  const ad = Buffer.alloc(AD_LENGTH, AEZEED_VERSION);
  salt.copy(ad, 1);
  return ad;
};

const getSeedBytes = entropy => {
  const seedBytes = Buffer.alloc(PLAINTEXT_LENGTH);
  seedBytes.writeUInt8(AEZEED_VERSION);
  seedBytes.writeUInt16BE(calculateBirthday(), 1);
  Buffer.from(entropy, 'hex').copy(seedBytes, 3);
  return seedBytes;
};

const calculateBirthday = () => {
  const unixTimestamp = Math.round(new Date().getTime() / 1000);
  return Math.floor(
    (unixTimestamp - BITCOIN_GENESIS_BLOCK_TIMESTAMP) / (60 * 60 * 24),
  );
};

const seedToMnemonic = function (seed) {
  const entropyBits = bytesToBinary([].slice.call(seed));
  const words = entropyBits.match(/(.{1,11})/g).map(function (binary) {
    const index = parseInt(binary, 2);
    return wordlist[index];
  });
  return words.join(' ');
};

const bytesToBinary = bytes => {
  return bytes.map(x => lpad(x.toString(2), '0', 8)).join('');
};
