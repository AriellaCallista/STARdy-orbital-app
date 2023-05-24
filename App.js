import { useFonts } from 'expo-font';

import Welcome from './src/screens/welcome';
import Profile from './src/screens/profile';
import HomeNav from './src/components/homeNav';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {

  const Stack = createNativeStackNavigator();

  const[fontsLoaded] = useFonts({
    PressStart: require('./assets/fonts/PressStart2P-Regular.ttf'),
    RowdiesBold: require('./assets/fonts/Rowdies-Bold.ttf'),
    RowdiesRegular: require('./assets/fonts/Rowdies-Regular.ttf'),
    UbuntuBold: require('./assets/fonts/Ubuntu-Bold.ttf'),
    UbuntuMedium: require('./assets/fonts/Ubuntu-Medium.ttf')
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }}/>
          <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }}/>
          <Stack.Screen name='HomeNav' component={HomeNav} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>

    );
  }
}



  
