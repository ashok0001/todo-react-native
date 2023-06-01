/* eslint-disable space-infix-ops */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import {TaskCard} from '../../components/TaskCard';

const CompletedTask = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Completed Task</Text>

      <ScrollView>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11,1,1,1,1,1,1].map((item, index) => (
          <TaskCard key={20 + index} item={item} isCompleted={true} type={'completed'}/>
        ))}
      </ScrollView>

      {/* <Text >pagination</Text> */}
    </View>
  );
};

export default CompletedTask;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 20,
    height: Dimensions.get('window').height,
    marginBottom:20
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
    color: 'black',
    textAlign: 'center',
  },
});
