import React from 'react'
import { View, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native'
import SaleCard from '../components/SaleCard'
import StockCard from '../components/StockCard'
import PriceCard from '../components/PriceCard'
import SaleGraph from '../components/SaleGraph'

export default () => (
  <ScrollView>
    <View style={styles.container}>
      <PriceCard />
      <SaleCard />
      <StockCard />
      <SaleGraph />
    </View>
  </ScrollView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fb',
    padding: 15
  }
})
