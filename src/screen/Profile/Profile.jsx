import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = () => {
  const [username, setUsername] = useState('username');
  const [profilePic, setProfilePic] = useState(null);
  const [isEditingUsername, setIsEditingUsername] = useState(false);

  const selectImageFromCamera = () => {
    // Implement your logic to launch the camera and capture a photo
  };

  const selectImageFromLibrary = async () => {
    console.warn('select image from  library');
    try {
      const response = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });

      setProfilePic(response[0].uri);
      // console.warn('image ', response[0].uri);
      // console.log("---",response)
    } catch (error) {
      console.warn('Error selecting image:', error);
    }
  };

  const updateUsername = () => {
    // Implement your logic to update the username
    console.log('Updating username:', username);
    setIsEditingUsername(false);
  };

  return (
    <View style={{alignItems: 'center', marginTop: 20}}>
      <TouchableOpacity onPress={selectImageFromLibrary}>
        <Image
          source={{
            uri:
              profilePic ||
              'https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651_640.png',
          }}
          style={{width: 150, height: 150, borderRadius: 75}}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsEditingUsername(true)}>
        <View style={{}}>
          {/* <Text style={{fontSize: 16}}>{username} </Text> */}
          {isEditingUsername ? (
            <TextInput
              style={{fontSize: 16}}
              placeholder="Enter username"
              value={username}
              onChangeText={text => setUsername(text)}
              onBlur={updateUsername}
              autoFocus
            />
          ) : (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 20,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  color: 'black',
                  marginRight: 10,
                }}>
                {username}
              </Text>
              <TouchableOpacity onPress={() => setIsEditingUsername(true)}>
                <Icon name="pencil" size={20} color="#000" />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </TouchableOpacity>

      <View style={styles.tasks}>
        <View style={[styles.taskDetail,styles.completedTaskDetail]}>
          <Text style={styles.completedValue}>40</Text>
          <Text style={styles.completedText}>Completed</Text>
        </View>
        <View style={[styles.taskDetail,styles.inProgressTaskDetail]}>
          <Text style={styles.inProgressValue}>10</Text>
          <Text style={styles.inProgressText}>Incompleted</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  tasks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
   
   
  },
  taskDetail: {
    alignItems: 'center',
    padding:20,
    borderRadius:5,
    marginHorizontal:10,
  },
  completedValue: {
    color: 'white',
  },
  completedText: {
    fontWeight: '500',
    color: 'white',
  },
  inProgressText: {
    color: 'white',
  },
  inProgressValue: {
    color: 'white',
  },
  completedTaskDetail:{
    backgroundColor:'green'
  },
  inProgressTaskDetail:{
    backgroundColor:'orange'
  }
});
