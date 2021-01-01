import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import TabNavigator from './components/TabNavigator'

const Stack = createStackNavigator()

export default () => {
  const [headerConfig, setHeaderConfig] = useState({})

  useEffect(() => {
    fetchHeaderConfig()
  }, [])

  const fetchHeaderConfig = async () => {}

  return (
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
}
