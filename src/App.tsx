import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import Navigations from './navigation';

const App = () => {
  return (
    <NavigationContainer>
     <Navigations/>
    </NavigationContainer>
  )
}

export default App;