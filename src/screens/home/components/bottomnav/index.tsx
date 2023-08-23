import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'

const BottomNav = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.bottomNavContainer}>
        <Icon 
            onPress={() => navigation.push("Home")}
            className="rounded-full" 
            name='home'
            color="#000"
            type='material'
        />
        <Icon 
            onPress={() => navigation.push("Home")}
            className="rounded-full" 
            name='book'
            color="#000"
            type='material'
        />
        <Icon 
            className="p-2 rounded-full border border-[#000]" 
            name='add'
            color="#000"
            type='material'
        />
        <Icon 
            onPress={() => navigation.push("Home")}
            className="rounded-full" 
            name='menu'
            color="#000"
            type='material'
        />
        <Icon 
            onPress={() => navigation.push("Home")}
            className="rounded-full" 
            name='menu'
            color="#000"
            type='material'
        />
    </View>
  )
}

export default BottomNav


const styles = StyleSheet.create({
    bottomNavContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 64,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12
    }
})