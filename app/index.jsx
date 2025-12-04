import React from "react";
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { TaskList } from '../components/TaskList'
import { SafeAreaView } from 'react-native-safe-area-context';

import "../global.css"


export default function Home() {

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#FFD3D5"}}>
      <View style={{flex: 1, backgroundColor: "#FFD3D5"}}>
        <TaskList />
      </View>
    </SafeAreaView>
  );
};



