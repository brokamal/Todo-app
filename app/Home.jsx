import React from "react";
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Header } from '../components/Header';
import { TaskList } from '../components/TaskList'

import "../global.css"


export default function Home() {

  return (
    <View>
      <Header />
      <TaskList />
    </View>

  );
};



