import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


import ProfileCard from '../components/profileCard';
import Requests from '../components/requests';
import DashButtons from '../components/dashButtons';


import { SafeAreaView } from 'react-native-safe-area-context';


export default function Dashboard() {



    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#eef1e1'
        }}>
            <View style={{flex: 1}}>
                <ProfileCard />
                <Requests />
                <DashButtons />
                
            </View> 
        </SafeAreaView>

        
    );
}

const styles=StyleSheet.create({
    
})


