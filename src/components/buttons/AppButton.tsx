import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../config/colors'

type Props = {
    title: string
    color: string
    onPress: () => void
}

export default function SecondaryButton({ title, color="primary", onPress }: Props) {
  return (
    <Pressable style={[styles.button, { backgroundColor: color === "primary" ? colors.primary : colors.secondary}]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%'
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})