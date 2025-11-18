import React, { useState } from "react";
import { Pressable, TextInput, Button, StyleSheet, Text, View, FlatList } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { MaterialIcons } from '@expo/vector-icons';


const DATA = [];


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
  const [tasks, setTask] = useState(DATA);
  const [value, setValue] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleAddButton = () => {
    setShowInput(true);
  }
  
  const handleSubmit = () => {
    if(value === "") return;
    const newTask = {id: tasks.length + 1, title: value};
    setTask([...tasks, newTask]);
    setValue("");
    setShowInput(false);
  }

  const handleDeleteTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTask(newTasks);
  }

  const handleClearAll = () => {
    setTask([]);
  }

  return(
    <View className="mt-3"> 
      <Pressable className="max-w-24 items-center rounded-xl mx-3 p-3 mb-3 bg-[#540863] active:bg-[#6a0c80]" onPress={handleClearAll}>
        <Text className='text-white'>Clear All</Text>
      </Pressable>
     <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => 
        <Item className="bg-[#E49BA6]" title={item.title} 
        onDelete={() => handleDeleteTask(item.id)}
        /> }
      />
      {showInput ? (
        <View className="">
          <TextInput 
            onChangeText={setValue}
            placeholder="Enter new task"
            className="text-[#540863] font-bold mx-3 p-3 mb-3 rounded-xl bg-[#E49BA6]"
          />
          <Pressable className="items-center rounded-xl mx-3 py-3 bg-[#540863] active:bg-[#6a0c80]" title="submit task" onPress={handleSubmit}>
            <Text className="text-white text-1xl">Submit</Text>
          </Pressable>
        </View>
      ) : (
        <View className="rounded-xl">
      <Pressable
        onPress={handleAddButton}
        className="py-3 items-center rounded-xl mx-3 bg-[#540863] active:bg-[#6a0c80]"
      >
        <MaterialIcons name="add" size={22} color="white" />
      </Pressable>
          </View>
      )
      }
   </View>
  );

}


