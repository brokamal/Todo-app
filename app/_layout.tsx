import { Stack } from "expo-router";



export default function StackLayout() {
  return (
    <Stack screenOptions={{
      headerStyle: {
      backgroundColor: '#92487A',
    },headerTintColor: "#FFD3D5",
      headerTitleStyle:{
        fontWeight: 800,
        fontSize: 24,
        fontFamily: 'mono',
        },
      title: "To Do",
    }}/>
  )
}
