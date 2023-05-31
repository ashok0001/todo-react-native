/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScrollBar from './ScrollView';
import Products from './Products';
import TaskCard from './TaskCard';
import TodaysTask from './TodaysTask';
import CreateTaskFrom from './CreateTaskFrom';

export default function Home() {
  return (
    <ScrollView>
      
      <TodaysTask/>
      <CreateTaskFrom/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
