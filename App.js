import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs, CardStyleInterpolators } from '@react-navigation/stack';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/rootReducer';

import Home from './screens/Home';
import Watch from './screens/Watch';

const Stack = createStackNavigator();

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
