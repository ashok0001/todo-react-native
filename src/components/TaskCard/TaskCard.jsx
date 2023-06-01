/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import React from 'react';

const TaskCard = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <Text style={styles.title}>TaskCard</Text>
        <Text style={styles.description}>
          wow what lovely day, it't really nice
        </Text>
      </View>
      <View>
        <BouncyCheckbox
          size={25}
          fillColor="#00D84A"
          unfillColor="#FFFFFF"
          iconStyle={{borderColor: 'black'}}
          innerIconStyle={{borderWidth: 2}}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: 'space-between',
    backgroundColor: '#120E43',
    borderRadius: 5,
    marginVertical: 5,
  },
  textContainer: {},
  inputView: {},
  title: {color: 'white', marginBottom: 5},
  description: {color: 'white'},
});
