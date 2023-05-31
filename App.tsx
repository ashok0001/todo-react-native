/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Home from './src/components/HomePage';
import Products from './src/components/Products';

const App = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  textColor: {
    color: 'blue',
  },
  fontStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  margin: {
    margin: 10,
    padding: 10,
  },
});

export default App;
