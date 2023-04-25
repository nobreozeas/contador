
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  const aumenta = () => setCount((prevCount) => prevCount + 1);

  const diminue = () => setCount((prevCount) => prevCount - 1);

  return (

    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#fff' />
      <View>
        <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>Contador</Text>
      </View>

      <View style={styles.viewContador}>

        <View style={styles.contador}>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'red',
                width: 100,
                height: 100,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderTopLeftRadius: 12,
                borderBottomLeftRadius: 12,
              }}
              disabled={count == 0 ? true : false}
              onPress={diminue}>
              <Text style={{ fontSize: 50 }}>-</Text>
            </TouchableOpacity>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 20,
                borderWidth: 1,
                borderLeftWidth: 0,
                borderRightWidth: 0,
              }}>
              <Text style={{ fontSize: 20 }}>{count}</Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#65AE62',
                width: 100,
                height: 100,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderTopRightRadius: 12,
                borderBottomRightRadius: 12,
              }}
              onPress={aumenta}>
              <Text style={{ fontSize: 50 }}>+</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    </SafeAreaView>



  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContador: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: 200,
  },
  contador: {
    height: 200,
    width: 500,
  }

});

export default App;
