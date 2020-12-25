import React, { useContext } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { PieChart } from 'react-native-chart-kit'
import { card, appContext, pieData } from '../lib'

export default () => {
  const [appData] = useContext(appContext)

  return (
    <View style={styles.card}>
      <Text style={styles.heading}>
        ITEMS SOLD FOR THE DAY :
        <Text style={{ fontSize: 26 }}> {appData.stats.salePerDay}</Text>
      </Text>
      <PieChart
        data={pieData}
        width={Dimensions.get('screen').width - 59}
        height={180}
        chartConfig={{
          color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
        }}
        accessor={'sale'}
        backgroundColor={'#f6f8fa'}
        center={[10, 0]}
        absolute
        avoidFalseZero
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
