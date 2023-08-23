import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'
import colors from '../../../../config/colors'

export default function Banner() {
  return (
    <View style={styles.bannerContainer}>
        <Image
            source={require("../../../../../assets/course3.jpg")}
            style={styles.bannerImage}
        />
        <Text style={styles.bannerText}>Computer Networking</Text>
            
    </View>
  )
}

const styles = StyleSheet.create({
    bannerContainer: {
        position: 'relative',
        width: "100%",
        paddingHorizontal: 16,
        marginBottom: 10
    },
    bannerImage: {
        borderRadius: 8,
        width: "100%",
        height: 200
    },
    bannerText: {
        position: 'absolute',
        flexWrap: 'wrap',
        paddingHorizontal: 16,
        paddingVertical: 8,
        fontSize: 18,
        lineHeight: 28,
        fontWeight: 'bold',
        color: '#fff',
        borderRadius: 999,
        left: 20,
        bottom: 12,
        backgroundColor: colors.secondary
    }
})