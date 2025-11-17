import React from "react";
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { TaskList } from '../components/TaskList'

import "../global.css"


export default function Todo() {

  return (
    <View style={{flex: 1, backgroundColor: "#FFD3D5"}}>
      <TaskList />
    </View>
  );
};



