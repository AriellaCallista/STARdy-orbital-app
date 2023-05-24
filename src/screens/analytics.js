import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Analytics() {
    return (
        <View style={styles.container}>
            <Text> Analytics</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eef1e1ff',
      alignItems: 'center',
      justifyContent: 'center',
    }
})