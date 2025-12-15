import React, { useState, useEffect } from "react";
import { 
  Modal,
  Pressable, 
  TextInput, 
  Text, 
  View,   } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage, { createAsyncStorage } from '@react-native-async-storage/async-storage';


export function AddTask(){

  const [modalVisible, setModalVisible] = useState(false);

  return(
    <View>
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}> 
        <TextInput/>
   </Modal>
    <Pressable
      onPress={() => setModalVisible(true)}>
      <Text>
      show the modal 
      </Text>
      </Pressable>
    </View>
  )
}


