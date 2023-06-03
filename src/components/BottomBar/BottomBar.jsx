/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {getData} from '../../config/AsyncStorage';
import {useDispatch, useSelector} from 'react-redux';
import {getUserProfile} from '../../Redux/Auth/Action';
import {getAllTasks} from '../../Redux/Task/Action';

const BottomBar = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {task,auth} = useSelector(store => store);

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  useEffect(() => {
    const getUserProfileData = async () => {
      const jwt = await getData('jwt');
      console.log(jwt);
      if (jwt) {
        dispatch(getUserProfile(jwt));
      }

      console.log('jwt async storate ', jwt);
    };

    getUserProfileData();
    dispatch(getAllTasks());

    console.log('--------------');
  }, []);
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigateToScreen('Home')}>
        <Icon name="home" size={24} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigateToScreen('Completed')}>
        <Icon name="check" size={24} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigateToScreen('Home')}>
        <Icon name="plus" size={24} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('Profile')}>
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
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    borderWidth: 1,
  },
});

export default BottomBar;
