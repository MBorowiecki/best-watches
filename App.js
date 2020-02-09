import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs, CardStyleInterpolators } from '@react-navigation/stack';
import Home from './screens/Home';
import Watch from './screens/Watch';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        >
        <Stack.Screen 
          name="HomeDrawer" 
          component={Home} 
          options={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
          />
        <Stack.Screen 
          name="Watch" 
          component={Watch} 
          options={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
