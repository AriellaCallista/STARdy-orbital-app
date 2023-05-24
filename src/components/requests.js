import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const Requests = () => {

    const [requests, setRequests] = useState([
        { name: 'Stella Lye', gender: 'F', key: '1' },
        { name: 'Jennifer', gender: 'F', key: '2' },
        { name: 'Minho Lee', gender: 'M', key: '3' },
        { name: 'Chris Evans', gender: 'M', key: '4' },
        { name: 'Chris Evans', gender: 'M', key: '5' },
        { name: 'Chris Evans', gender: 'M', key: '6' },
        { name: 'Chris Evans', gender: 'M', key: '7' },
        { name: 'Chris Evans', gender: 'M', key: '8' },
        { name: 'Chris Evans', gender: 'M', key: '9' },
        { name: 'Chris Evans', gender: 'M', key: '10' },
    ])

    return (
        <View style={{
            //backgroundColor: 'white',
            height: 285,
            marginHorizontal: 15,
            paddingHorizontal: 6,
            paddingVertical: 18,
        }}>
            <View style={{
                //backgroundColor: 'pink',
                // flex: 1,
                // marginTop: -18
            }}>
                <Text style={{
                    fontWeight: '500',
                    fontSize: 20,
                    marginTop: -5
                }}>Requests</Text>
                
            </View>

            <View style={{
                backgroundColor: '#007788',
                height: 1,
                marginTop: 5
            }}></View>

            <View style={{
                //backgroundColor: 'grey',
                flex: 1,
                // marginTop: 1,
                marginLeft: -10,
                justifyContent: 'space-between',
                overflow: 'scroll',

                //alignItems: 'center'
            }}>

            <ScrollView>
                { requests.map((item) => {
                    return (
                        <View key={item.key}>
                            <View style={{
                                //backgroundColor: 'green',
                                padding: 15
                            }}>
                                <View style={{
                                    //backgroundColor: 'blue',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    height: 50
                                }}>

                                    <FontAwesome 
                                        name='user-circle-o' 
                                        size={40} 
                                        color={'#007788'}
                                    />

                                    <Text style={{
                                        marginHorizontal: 10,
                                        fontSize: 17
                                    }}>{item.name + ', ' + item.gender}</Text>

                                </View>
                                
                            </View>
                            
                        </View>
                    )
                })
                }

            </ScrollView>

            </View> 

        </View>
    )
}

const styles=StyleSheet.create({

})

export default Requests;