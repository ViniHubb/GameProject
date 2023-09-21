import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './src/Main'
import Feedback from './src/Feedback';
import Final from './src/Final'

const Stack = createNativeStackNavigator();

export default function App() {
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