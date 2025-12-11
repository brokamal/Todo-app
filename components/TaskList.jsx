import React, { useState, useEffect } from "react";
import { Modal,
  Pressable, 
   ScrollView, 
  TextInput,
  Text, 
  View, 
  } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DATA = [];
const STORAGE_KEY = "TASKS_STORAGE";

const Item = ({ title, onDelete }) => (
  <View className="bg-[#E49BA6] mx-3 mb-3 flex-row items-center justify-between p-3 rounded-xl">
    <View className="flex-1">
      <BouncyCheckbox
        text={title}
        fillColor="#92487A"
        textStyle={{ color: "#540863", fontWeight: "600" }}
        onPress={() => {}}
      />
    </View>
    <Pressable 
      onPress={onDelete} 
      className="active:scale-125">
        <MaterialIcons name="delete" size={25} color="#540863" />
    </Pressable>
  </View>
);

export function TaskList (){
  const [modalVisible, setModalVisible] = useState(false);
  const [tasks, setTask] = useState(DATA);
  const [value, setValue] = useState("");

  const loadTasks = async () => {
    try{ 
      const storedTasks = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedTasks) setTask(JSON.parse(storedTasks));
    }catch (error){
        console.log("Error loading tasks", error);
    }
  }

  const saveTasks = async (taskToSave) => {
    try{
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(taskToSave));
    }
    catch(error){
      console.log("Errror saving tasks", error);
    }
  };

  useEffect(() => {
    loadTasks();
 }, []);
 
  useEffect(() => {
    saveTasks(tasks);
 }, [tasks]);

  const handleAddButton = () => {
    setModalVisible(true);
  }
  const handleCloseModal = () => {
    setModalVisible(false);
  }

  const handleSubmit = () => {
    if(value.trim() === "") return;
    const newTask = { id: Date.now().toString(), title: value };    
    const updatedTasks = [...tasks, newTask];
    setTask(updatedTasks);
    setValue("");
    setModalVisible(false);
  }

  const handleDeleteTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTask(newTasks);
  }
  
  const handleEditTask = (id) => {
    const newTask = { id: Date.now().toString(), title: value};
    const updateTasks = [...tasks, newTask];

  }

  const handleClearAll = () => {
    setTask([]);
  }

   return(
    <View className="flex-1 justify-evenly"> 
      <Pressable className="max-w-24 items-center rounded-xl mx-3 p-3 mb-3 bg-[#540863] active:bg-[#6a0c80]" onPress={handleClearAll}>
        <Text className='text-white'>Clear All</Text>
          </Pressable>
        <ScrollView>
          {tasks.map((item) => (
            <Item
              key={item.id}
              className="bg-[#E49BA6]"
              title={item.title}
              onDelete={() => handleDeleteTask(item.id)}
            />
          ))}
        </ScrollView>   
         <View className="items-end">
          <Pressable
          onPress={handleAddButton}
          className="py-3 min-w-14 min-h-12 items-center rounded-2xl mx-3 mb-3 bg-[#540863] active:bg-[#6a0c80]"
        >
          <MaterialIcons name="add" size={22} color="white" />
        </Pressable>
      </View>
        <Modal 
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={handleCloseModal}>
         <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-[#FDF2F4] w-[90%] p-6 rounded-2xl shadow-xl border border-[#540863]">
           <TextInput 
            onChangeText={setValue}
            placeholder="Enter new task"
            className="text-[#540863] font-bold mx-3 p-3 mb-3 rounded-xl bg-[#E49BA6]"
          />
            <View className="flex-row">
          <Pressable className="items-center rounded-xl mx-3 py-3 bg-[#540863] active:bg-[#6a0c80]" title="submit task" onPress={handleSubmit}>
            <Text className="text-white text-1xl">Submit</Text>
          </Pressable>
      <Pressable className="items-center rounded-xl mx-3 py-3 bg-[#540863] active:bg-[#6a0c80]" title="submit task" onPress={handleSubmit}>
            <Text className="text-white text-1xl">Edit</Text>
          </Pressable>
          </View>
          </View>
          </View>
        </Modal>
   </View>
  );
}


