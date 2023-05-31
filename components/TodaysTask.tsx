/* eslint-disable space-infix-ops */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import TaskCard from './TaskCard';

const TodaysTask = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todays Task</Text>

      <View>
        {[1, 1, 1, 1, 1].map((item, index) => (
          <TaskCard key={20 + index} item={item} />
        ))}
      </View>
    </View>
  );
};

export default TodaysTask;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
    color: 'black',
  },
});
