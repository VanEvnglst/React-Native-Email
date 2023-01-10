import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Box,Text  } from '../atoms';

const Sidebar: React.FC<DrawerContentComponentProps> = () => {
return (
 <Box flex={1} bg='$sidebarBackground'>
  <SafeAreaView>
    <Text variant='sidebar' m='lg'>Inkdrop</Text>
  </SafeAreaView>
 </Box>
)
}

export default Sidebar