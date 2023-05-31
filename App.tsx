/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Home from './components/HomePage';
import Products from './components/Products';

const App = (): JSX.Element => {
  return (
    <View>
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
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
