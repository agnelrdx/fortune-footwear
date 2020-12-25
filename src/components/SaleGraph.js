import React, { useContext } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import { card, appContext, saleGraphData } from '../lib'

export default () => {
  const [appData] = useContext(appContext)

  return (
    <View style={[styles.card, { marginTop: 15, paddingTop: 10 }]}>
      <LineChart
        data={saleGraphData}
        width={Dimensions.get('screen').width - 59}
        height={220}
        chartConfig={{
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  card,
  heading: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 13
  }
})
