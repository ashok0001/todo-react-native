/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react';

const TaskCard = ({item, isCompleted, type}) => {
  return (
    <View style={[styles.container, styles[`container_${type}`]]}>
      <View style={styles.inputView}>
        <Text style={styles.title}>TaskCard</Text>
        <Text style={styles.description}>
          wow what lovely day, it't really nice
        </Text>
      </View>
      <View>
        {!isCompleted && (
          <BouncyCheckbox
            isChecked={isCompleted}
            size={25}
            fillColor="#00D84A"
            unfillColor="#FFFFFF"
            innerIconStyle={{borderWidth: 2}}
            onPress={() => {}}
            disableBuiltInState={isCompleted}
          />
        )}
        {isCompleted && (
          <TouchableOpacity onPress={() => console.warn("delete task")}>
            <Icon name="closecircle" size={24} color="#FF6263" />
          </TouchableOpacity>
        )}
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
  container_completed: {
    backgroundColor: 'rgba(0, 216, 74, 0.5)',
  },
  container_inprogress: {
    backgroundColor: 'rgba(255, 102, 102, 0.5)',
  },
  textContainer: {},
  inputView: {},
  title: {color: 'white', marginBottom: 5},
  description: {color: 'white'},
});
