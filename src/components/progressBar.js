import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';


const goToLeaderboard = () => {
    Alert.alert('Leaderboard')
}

const ProgressBar = () => {

    const [width, setWidth] = useState('75%');

    return (
        <SafeAreaView style={{
            //backgroundColor: 'pink'
            marginTop: 5
        }}>
            <Text style={{
                position: 'absolute',
                //fontFamily: 'PressStart',
                fontSize: 15,
                //color: '#007788',
                marginTop: -4
            }}>XP: 1000</Text>
            <TouchableOpacity onPress={() => goToLeaderboard()}>
                <View style={styles.progress}>
                    <View style={{
                         display: 'flex',
                         height: 10,
                         backgroundColor: '#007788',
                         borderRadius: 20,
                         width: width
                    }}></View>
                </View>
            </TouchableOpacity>
            
        </SafeAreaView>
    )

}

const styles=StyleSheet.create({
    progress: {
        height: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 20,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        borderRadius: 10,
    }
})

export default ProgressBar;