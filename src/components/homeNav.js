import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Analytics from '../screens/analytics';
import Dashboard from '../screens/dashboard';
import FocusSession from '../screens/focusSession';

import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function HomeNav() {

    const MainTab = createMaterialBottomTabNavigator();

    return <MainTab.Navigator 
              initialRouteName='Dashboard'
              //labeled={false}
              barStyle={{ 
                position: 'absolute',
                bottom: 15,
                left: 15,
                right: 15,
                elevation: 0,
                backgroundColor: '#007788',
                height: 85,
                borderRadius: 15,
                overflow: 'hidden', // need overflow hidden to display borderadius
                }}
              activeColor='#f6cefc'
              inactiveColor='#f6f6f6'
            >

      <MainTab.Screen 
        name='Analytics' 
        component={Analytics} 
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <SimpleLineIcons name='graph' size={30} color={focused ? '#007788' : '#f6f6f6'} />
            </View>
          ),
        }} 
      />

      <MainTab.Screen 
        name='Focus Session' 
        component={FocusSession}  
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <FontAwesome name='plus-circle' size={30} color={focused ? '#007788' : '#f6f6f6'} />
            </View>
          )
        }}
      />
      <MainTab.Screen 
        name='Dashboard' 
        component={Dashboard}  
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <FontAwesome name='user-circle-o' size={30} color={focused ? '#007788' : '#f6f6f6'} />
            </View>
          )
        }}
      />
    </MainTab.Navigator>
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eef1e1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mainTab: {
      position: 'absolute',
      backgroundColor: '#eef1e1',
    },
    icon: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }, 
    shadow: {
      shadowColor: '#007788',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 1,
      shadowRadius: 3.5,
      elevation: 5,
      zIndex: 999 
    },
    iconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
  