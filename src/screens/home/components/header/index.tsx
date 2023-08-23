import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Icon, Image } from 'react-native-elements'

export default function Header() {
  return (
    <View style={styles.header}>
        <Icon 
            name='menu'
            color="#000"
            type='material'
        />
        <View style={styles.profileContainer}>
            <Text style={styles.profileName}>
                Hi, Kirubel Kinfe
            </Text>
            <Image
                source={require("../../../../../assets/pic1.jpg")}
                style={styles.profilePic}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20,
        marginHorizontal: 16
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileName: {
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 28

    },
    profilePic: {
        width: 50,
        height: 50,
        padding: 16,
        borderRadius: 9999,
        marginLeft: 10
    }
})