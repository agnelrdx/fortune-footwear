import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

export default () => (
  <Icon
    onPress={() => alert('This is a button!')}
    name='menu'
    size={35}
    color='#666'
  />
)
