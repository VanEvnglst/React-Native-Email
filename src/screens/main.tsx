import React from 'react';
import { View } from 'react-native';
import { Box, Text, Container } from '../atoms';
import HeaderBar from '../components/header-bar';
import NoteList from '../components/note-list';
export default function MainScreen() {
  return(
    <Container justifyContent={'center'}
    alignItems='center'>
      <NoteList />
      <HeaderBar/>
    </Container>
     
  
  )
}