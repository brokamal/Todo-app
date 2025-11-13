import React, { useState } from "react";
import { TextInput, Button, StyleSheet, Text, View, FlatList } from 'react-native';


const DATA = [];


const Item = ({ title, onDelete}) => (
  <View>
    <Text>{title}</Text>
    <Button title="Delete" onPress={onDelete} />
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

  return(
    <View style={styles.card}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => 
        <Item title={item.title} 
        onDelete={() => handleDeleteTask(item.id)}
        style={styles.card} /> }
      />
      {showInput ? (
        <View>
          <TextInput 
            onChangeText={setValue}
            placeholder="Enter new task"
          />
          <Button title="submit task" onPress={handleSubmit} />
        </View>
      ) : (
        <View>
          <Button title="Add task" onPress={handleAddButton} />
        </View>
      )
      }
    </View>
  );

}



const styles = StyleSheet.create({
  card:{
    padding: 12,
    backgroundColor: 'yellow',
  },
  task: {
    backgroundColor: 'red',
  },
})
