import { DrawerScreenProps } from '@react-navigation/drawer';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { Box, Text, Container, TouchableOpacity } from '../atoms';
import HeaderBar from '../components/header-bar';
import FeatherIcon from '../components/icon';
import NoteList from '../components/note-list';
import { HomeDrawerParamList, RootStackParamList } from '../navigation';


type Props = CompositeScreenProps<DrawerScreenProps<HomeDrawerParamList, 'Main'>,
  NativeStackScreenProps<RootStackParamList>>

export default function MainScreen({ navigation }: Props) {

  const handleSidebarToggle = useCallback(() => {
    navigation.toggleDrawer()
  }, [navigation])



  return(
    <Container justifyContent={'center'}
    alignItems='center'>
      <NoteList />
      <HeaderBar>
        <TouchableOpacity 
          m='xs'
          p='xs'
          rippleBorderless 
          onPress={handleSidebarToggle}
        > 
          <FeatherIcon name='menu' size={22}/>
        </TouchableOpacity>
          <Box flex={1} alignItems='center'>
            <Text fontWeight='bold'>All Notes</Text>
          </Box>
        <TouchableOpacity m='xs' p='xs' rippleBorderless>
        <FeatherIcon name='more-vertical' size={22}/>
        </TouchableOpacity>
      </HeaderBar>
    </Container>
  )
} 