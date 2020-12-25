import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppProvider } from './src/lib'
import Root from './src/index'

export default () => (
  <SafeAreaProvider style={{ flex: 1 }}>
    <AppProvider>
      <Root />
    </AppProvider>
  </SafeAreaProvider>
)
