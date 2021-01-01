import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import MultiSelect from 'react-native-multiple-select'
import Reinput from 'reinput'
import { card } from '../lib'

export default () => {
  const chnage = (name) => console.log(name)

  const items = [
    {
      id: '92iijs7yta',
      name: 'Ondo'
    },
    {
      id: 'a0s0a8ssbsd',
      name: 'Ogun'
    },
    {
      id: '16hbajsabsd',
      name: 'Calabar'
    },
    {
      id: 'nahs75a5sg',
      name: 'Lagos'
    },
    {
      id: '667atsas',
      name: 'Maiduguri'
    },
    {
      id: 'hsyasajs',
      name: 'Anambra'
    },
    {
      id: 'djsjudksjd',
      name: 'Benue'
    },
    {
      id: 'sdhyaysdj',
      name: 'Kaduna'
    },
    {
      id: 'suudydjsjd',
      name: 'Abuja'
    }
  ]

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.heading}>Add Item to Stock</Text>
          <Reinput
            labelActiveColor='#ab47bc'
            underlineActiveColor='#ab47bc'
            label='Enter Item Name'
            fontSize={16}
            paddingBottom={5}
            style={styles.textField}
            onChangeText={(name) => chnage(name)}
          />

          <MultiSelect
            hideTags
            items={items}
            uniqueKey='id'
            onSelectedItemsChange={(item) => console.log(item)}
            selectText='Pick Items'
            searchInputPlaceholderText='Search Items...'
            onChangeInput={(text) => console.log(text)}
            tagRemoveIconColor='#CCC'
            tagBorderColor='#CCC'
            tagTextColor='#CCC'
            selectedItemTextColor='#CCC'
            selectedItemIconColor='#CCC'
            itemTextColor='#000'
            displayKey='name'
            searchInputStyle={{ color: '#CCC' }}
            submitButtonColor='#CCC'
            submitButtonText='Submit'
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fb',
    padding: 15
  },
  card,
  heading: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 15
  },
  textField: {}
})
