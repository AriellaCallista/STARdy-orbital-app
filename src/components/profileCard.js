import {React, useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'

import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import ProgressBar from './progressBar';

const editProfile = () => {
    return Alert.alert('edit')
}

const ProfileCard = () => {

    const[name, setName] = useState('Ariella Callista')
    const[major, setMajor] = useState('Computer Science')
    const[year, setYear] = useState('Year 2')
    const[gender, setGender] = useState('F')

    return (
        <View style={{
            height: 190,
            marginHorizontal: 15,
            paddingHorizontal: 6,
            paddingVertical: 18,
            backgroundColor: '#eef1e1',
            borderWidth: 1,
            borderColor: '#007788',
            borderRadius: 10
        }}>
            <View style={{
                //backgroundColor: 'pink',
                // flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: 70
            }}>
                <View style={{
                    //marginLeft: 19
                }}>
                    <FontAwesome 
                        name='user-circle-o' 
                        size={70} 
                        color={'#007788'}
                     />
                </View>
                <View style={{
                    //backgroundColor: '#f6f6f6',
                    flexDirection: 'column',
                    flex: 1,
                    marginLeft: 6
                }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 22,
                                marginLeft: 12,
                                //color: '#007788'
                            }}>{ name }</Text>
                        </View>

                        <View style={{
                            marginRight: 12
                        }}>
                            <TouchableOpacity onPress={editProfile}>
                                <Feather name='edit' size={20} color={'#007788'} />
                            </TouchableOpacity>
                            
                        </View>
                    
                    </View>

                    

                </View>
            </View>

            <View style={{
                height: 50,
                //backgroundColor: 'coral',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <View style={{
                    width: 200,
                    //backgroundColor: 'green',
                    flexDirection: 'row'
                }}>
                    <View style={{
                    //backgroundColor: '#FFF9E8',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingRight: 15 }}>
                        <Text style={styles.caption}>{major}</Text> 
                    </View>

                    <View style={{
                        //backgroundColor: '#FFF9E8',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 20,
                    }}>
                        <Text style={styles.caption}>{year}</Text> 
                    </View>

                    <View style={{
                        //backgroundColor: '#FFF9E8',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 20,
                        
                    }}>
                        <Text style={styles.caption}>{gender}</Text> 
                    </View>

                </View>

                <View style={{
                    marginRight: 12,
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity onPress={editProfile}>
                        <Feather name='edit' size={20} color={'#007788'} />
                    </TouchableOpacity>
                    
                </View>

                
            </View>

            <View style={{
                //backgroundColor: 'white',
                flex: 1,
                marginTop: -6
            }}>
                <ProgressBar />

            </View>

        </View>
    )
}

const styles=StyleSheet.create({
    caption: {
        fontSize: 16,
        //color: '#007788'
    }
})

export default ProfileCard;