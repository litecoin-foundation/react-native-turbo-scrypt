import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import {Scrypt, HybridPoopy as TurboMath} from 'react-native-turbo-scrypt';

const SCRYPT_N = 32768;
const SCRYPT_R = 8;
const SCRYPT_P = 1;
const SCRYPT_KEY_LENGTH = 32;

function App(): React.JSX.Element {
  const onPress = () => {
    updateTimeTaken(0);
    const t0 = performance.now();
    const hex = Scrypt.scrypt(
      String(Math.random() * 1000000000000),
      'poopy',
      SCRYPT_N,
      SCRYPT_R,
      SCRYPT_P,
      SCRYPT_KEY_LENGTH,
    );
    updateHex(hex);
    const t1 = performance.now();
    updateTimeTaken(t1 - t0);
  };

  const [scryptHex, updateHex] = useState('');
  const [timeTaken, updateTimeTaken] = useState(0);

  const test = TurboMath.add(20, 1);

  return (
    <SafeAreaView style={styles.container}>
      <Text>9 + 10 = {test}</Text>
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
