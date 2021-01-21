import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const btnSetAsync = () => {
    storeData('avi');
  }

  const btnGetAsync = () => {
    getData();
  }

  const btnGetAsync2 = async () => {
    let r = await getData2();
    console.log('r', r);
  }

  const btnRemoveAsync = async () => {
    await removeValue();
    console.log('remove ended');
  }

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('name')
    } catch (e) {
      console.log('remove error!');
    }
    console.log('remove Done.')
  }

  const getData2 = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('name')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log('get error2!');
    }
  }

  const getData = () => {
    try {
      AsyncStorage.getItem('name', (err, result) => {
        console.log('get ended');
        let d = result != null ? JSON.parse(result) : null;
        console.log(d);
        return d;
      })
    } catch (e) {
      console.log('get error!');
    }
  }

  const storeData = (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      AsyncStorage.setItem('name', jsonValue,
        () => { console.log('set ended'); });
    } catch (e) {
      console.log('set error!');
    }
  }

  return (
    <View style={styles.container}>
      <Text>MY app!</Text>
      <Button title="set async storage" onPress={btnSetAsync} />
      <Text></Text>
      <Button title="get async storage" onPress={btnGetAsync} />
      <Text></Text>
      <Button title="get async storage2" onPress={btnGetAsync2} />
      <Text></Text>
      <Button title="remove async storage" onPress={btnRemoveAsync} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
