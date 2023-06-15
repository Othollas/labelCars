import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Home from './Home'
import CarItem from './CarItem'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#222"
        }
      }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CarItem" component={CarItem} options={{
          title: "Détail de la voiture"
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App