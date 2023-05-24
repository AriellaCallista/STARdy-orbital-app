import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default function Profile({ navigation }) {

    return (
        <View style={styles.container}>
            <Text> Profile </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eef1e1ff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})