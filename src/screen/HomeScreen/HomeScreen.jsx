/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { TodaysTask } from '../../components/TodaysTask';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.introText}>  Hello  Ashok 👋 Here Is Your Todays Task</Text>
      </View>
      <ScrollView>
        <TodaysTask />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.get('window').height,
    position: 'relative',
  },
  createFormView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  introText:{
color:'white',
backgroundColor:"#1FAA59",
padding:20,
fontSize:16,
textAlign:'center',
margin:10,
borderRadius:5
  }
});
