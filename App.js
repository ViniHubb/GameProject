import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import Main from './src/Main'
import Feedback from './src/Feedback';
import Final from './src/Final'

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Indie-Flower': require('./assets/fonts/IndieFlower-Regular.ttf'),
    'Caveat-Variable': require('./assets/fonts/Caveat/Caveat-VariableFont_wght.ttf'),
    'Caveat-Regular': require('./assets/fonts/Caveat/Caveat-Regular.ttf'),
    'Caveat-Medium': require('./assets/fonts/Caveat/Caveat-Medium.ttf'),
    'Caveat-SemiBold': require('./assets/fonts/Caveat/Caveat-SemiBold.ttf'),
    'Caveat-Bold': require('./assets/fonts/Caveat/Caveat-Bold.ttf')
  });
  if (!fontsLoaded) {
    return null;
  }
  
  return (    
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            name='Main'
            component={Main}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='Feedback'
            component={Feedback}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='Final'
            component={Final}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}