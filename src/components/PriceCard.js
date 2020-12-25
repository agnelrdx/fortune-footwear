import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { card, appContext } from '../lib'

export default () => {
  const [appData] = useContext(appContext)

  return (
    <View style={[styles.card, { marginBottom: 15, paddingTop: 10 }]}>
      <Text style={[styles.heading, { marginBottom: 0 }]}>
        {`TODAY'S SALE AMOUNT : `}
        <Text style={{ fontSize: 26 }}>
          Rs. {appData.stats.saleAmountPerDay}
        </Text>
      </Text>
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
