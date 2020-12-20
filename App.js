import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { AppProvider } from './src/lib'
import Root from './src/index'

export default () => (
  <SafeAreaView style={styles.container}>
    <AppProvider>
      <Root />
    </AppProvider>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
