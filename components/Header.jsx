import React from "react";
import { StyleSheet, Text, View, FlatList } from 'react-native';


export function Header(){
  return(
    <View style={styles.container}>
      <Text style={styles.text}>
        To Do
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: 'cyan',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  }
})
