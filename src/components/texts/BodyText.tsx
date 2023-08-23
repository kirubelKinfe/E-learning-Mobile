import { View, Text, StyleSheet, Platform } from 'react-native'
import React from 'react'

type Props = {
    children: string
}

export default function BodyText( { children }: Props ) {
  return (
      <Text style={styles.text}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir"
    }
})