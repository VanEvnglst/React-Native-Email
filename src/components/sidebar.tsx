import React, { useCallback } from 'react';
import { View, SafeAreaView } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Box,Text  } from '../atoms';
import BookList from './book-list';

const Sidebar: React.FC<DrawerContentComponentProps> = ({ navigation }) => {
  const handleBookListItemPress = useCallback(() => {
    navigation.closeDrawer();
  }, [navigation]);

return (
 <Box flex={1} bg='$sidebarBackground'>
  <SafeAreaView>
    <Text variant='sidebar' m='lg'>Inkdrop</Text>
  </SafeAreaView>
    <BookList onPressItem={handleBookListItemPress}
    />
 </Box>
)
}

export default Sidebar