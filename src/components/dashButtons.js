import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Alert, TouchableOpacity } from 'react-native'

import { Entypo } from '@expo/vector-icons'

export default function DashButtons() {

    const toDo = () => {
        Alert.alert('To do')
    }
    
    const notes = () => {
        Alert.alert('Notes')
    }
    
    const encouragement = () => {
        Alert.alert('Encouragement')
    }
    

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toDo}>
                <View style={styles.button}>
                    <Text style={styles.text}>To Do</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={notes}>
                <View style={styles.button}>
                    <Text style={styles.text}>Notes</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={encouragement}>
                <View style={styles.button}>
                    <Entypo name='heart' size={24} color='#f6cefc' />
                </View>
            </TouchableOpacity>
        
        </View>
    )

}

const styles=StyleSheet.create({
    container: {
        height: 70,
        marginHorizontal: 15,
        paddingHorizontal: 6,
        paddingVertical: 18,
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    button: {
        backgroundColor: '#007788',
        width: 90,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    },
    text: {
        color: '#f6f6f6',
        //fontFamily: 'RowdiesRegular',
        fontWeight: 'bold',
        fontSize: 18
    }
})
