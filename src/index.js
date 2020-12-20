import React, { useRef, useEffect, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { DrawerLayoutAndroid, View, Text } from 'react-native'
import { appContext, headerStyle } from './lib'
import Dashboard from './screens/Dashboard'

const Stack = createStackNavigator()

export default () => {
  const drawer = useRef(null)
  const [appData, setAppData] = useContext(appContext)

  useEffect(() => {}, [])

  const navigationView = () => (
    <View>
      <Text>I'm in the Drawer!</Text>
    </View>
  )

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition='left'
      renderNavigationView={navigationView}
    >
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Dashboard'
          screenOptions={headerStyle}
        >
          <Stack.Screen name='Dashboard' component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </DrawerLayoutAndroid>
  )
}
