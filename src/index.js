import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import TabNavigator from './components/TabNavigator'

const Stack = createStackNavigator()

export default () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName='Root'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ab47bc'
        },
        headerTitleStyle: {
          color: '#fff',
          textAlign: 'center'
        }
      }}
    >
      <Stack.Screen name='Fortune Footwears' component={TabNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
)
