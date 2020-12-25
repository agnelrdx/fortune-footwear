import React, { useContext } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { appContext } from '../lib'
import Dashboard from '../screens/Dashboard'
import AddItem from '../screens/AddItem'
import Reports from '../screens/Reports'
import Search from '../screens/Search'

const Tab = createMaterialTopTabNavigator()

export default () => {
  const [appData] = useContext(appContext)

  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 12, fontWeight: '700', color: '#444' },
        tabStyle: { width: 150 },
        style: { backgroundColor: '#fefefe' },
        scrollEnabled: true,
        indicatorStyle: { backgroundColor: '#ab47bc' }
      }}
      initialRouteName={appData.initialRoute}
      lazy={true}
      swipeEnabled={false}
    >
      <Tab.Screen name='Dashboard' component={Dashboard} />
      <Tab.Screen name='Add Item' component={AddItem} />
      <Tab.Screen name='Search' component={Search} />
      <Tab.Screen name='Reports' component={Reports} />
    </Tab.Navigator>
  )
}
