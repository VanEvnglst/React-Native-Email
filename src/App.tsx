import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';


const App = () => {
  return (
    <NavigationContainer>
      <View style={{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      ><Text>Hello again</Text></View>
    </NavigationContainer>
  )
}

export default App;