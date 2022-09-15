import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {NavService} from './src/Config';
import Boarding from './src/Screens/Boarding';
import Mobile from './src/Screens/Mobile';

const Stack = createStackNavigator();

function Onboarding() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Boarding" component={Boarding} />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" />
      <Stack.Screen name="menu" />
      <Stack.Screen name="QRScan" />
      <Stack.Screen name="QRRead" />
      <Stack.Screen name="notification" />
      <Stack.Screen name="trade" />
      <Stack.Screen name="wallet" />
      <Stack.Screen name="activity" />
    </Stack.Navigator>
  );
}

const AppNavigation = () => {
  const [state, setState] = useState('onBording');
  return (
    <NavigationContainer ref={ref => NavService.setTopLevelNavigator(ref)}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={state}>
        <Stack.Screen name="onBording" component={Onboarding} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
