/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text} from 'react-native';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { useNavigation } from '@react-navigation/native';

const BottomBar = () => {
  //   const navigation = useNavigation();

  const navigateToScreen = (screenName: string) => {
    // navigation.navigate(screenName);
    console.warn('navitate to Screen');
  };
  //   console.warn('navitate to Screen');
  return (
    <View style={styles.container}>
      {/* <Text>hello ashok this is bottom bar</Text> */}
      <TouchableOpacity onPress={() => navigateToScreen('Home')}>
        <Icon name="home" size={24} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigateToScreen('Done')}>
        <Icon name="check" size={24} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigateToScreen('Create')}>
        <Icon name="plus" size={24} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('User')}>
        <Icon name="user" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#120E43',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});

export default BottomBar;
