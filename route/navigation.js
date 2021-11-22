import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screen/Home';
import NextScreen from '../Screen/NextScreen';
import Onboarding from '../Screen/Onboarding';

const Stack = createNativeStackNavigator();
function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NextScreen" component={NextScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
