import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import {Scrypt} from 'react-native-turbo-scrypt';

const SCRYPT_N = 32768;
const SCRYPT_R = 8;
const SCRYPT_P = 1;
const SCRYPT_KEY_LENGTH = 32;

function buf2hex(buffer: ArrayBuffer) {
  return [...new Uint8Array(buffer)]
    .map(x => x.toString(16).padStart(2, '0'))
    .join('');
}

function App(): React.JSX.Element {
  const onPress = async () => {
    const passwordString = 'aezeed';
    const passwordBuffer = new TextEncoder().encode(passwordString).buffer;

    const saltBuffer = new ArrayBuffer(4);
    const saltView = new Uint8Array(saltBuffer);
    saltView.set([0x04, 0x08, 0x0c, 0x10]);

    console.log(passwordString);
    console.log(saltBuffer.byteLength);
    console.log(passwordBuffer.byteLength);

    updateTimeTaken(0);

    const t0 = performance.now();
    const key = Scrypt.scrypt(
      passwordBuffer,
      saltBuffer,
      SCRYPT_N,
      SCRYPT_R,
      SCRYPT_P,
      SCRYPT_KEY_LENGTH,
    );
    updateHex(buf2hex(key));
    const t1 = performance.now();
    updateTimeTaken(t1 - t0);
  };

  const [scryptHex, updateHex] = useState('');
  const [timeTaken, updateTimeTaken] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.button}>
        <Button title="Tap to Scrypt!" onPress={onPress} />
      </View>
      <View style={{width: '80%'}}>
        <Text>{scryptHex}</Text>
      </View>
      {timeTaken === 0 ? null : (
        <Text>Time Taken: {String(timeTaken.toFixed(2))}ms</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FFF0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 60,
    width: 200,
    backgroundColor: '#00CED1',
    justifyContent: 'center',
    borderRadius: 12,
    marginBottom: 30,
  },
});

export default App;
