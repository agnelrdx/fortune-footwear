import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { card, appContext } from '../lib'

export default () => {
  const [appData] = useContext(appContext)

  return (
    <View style={styles.stockContainer}>
      <View style={[styles.card, { flex: 1, marginRight: 7.5 }]}>
        <View style={styles.iconWrapper}>
          <Icon name='home' size={20} color='#ab47bc' />
        </View>
        <Text style={{ fontSize: 45 }}>{appData.stats.stockLeft}</Text>
        <Text style={styles.commonTitle}>STOCK LEFT</Text>
      </View>
      <View style={[styles.card, { flex: 1, marginLeft: 7.5 }]}>
        <View style={styles.iconWrapper}>
          <Icon name='cart' size={20} color='#ab47bc' />
        </View>
        <Text style={styles.saleText}>VKC</Text>
        <Text style={styles.commonTitle}>
          LAST SALE | No. {appData.stats.lastSaleSerialNo} | Rs.{' '}
          {appData.stats.lastSalePrice}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card,
  stockContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  commonTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#777',
    fontWeight: '700',
    lineHeight: 22
  },
  saleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 3,
    marginBottom: 3
  },
  iconWrapper: {
    width: 45,
    height: 45,
    borderRadius: 50 / 2,
    backgroundColor: '#e1bee7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 3
  }
})
