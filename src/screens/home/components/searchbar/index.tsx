import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'

export default function SearchBar() {
  return (
    <View style={styles.searchbarContainer}>
        <Icon 
            style={styles.searchIcon}
            name='search'
            color="#00CCBB"
            type='material'
        />
        <TextInput  
            style={styles.searchInput}
            placeholder='Search for courses'
            keyboardType='default'
        />
    </View>
  )
}

const styles = StyleSheet.create({
    searchbarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 16,
        backgroundColor: '#dde',
        padding: 8,
        borderRadius: 8
    },
    searchIcon: {
        borderRadius: 999,
        marginRight: 5
    },
    searchInput: {
        flex: 1
    }
})