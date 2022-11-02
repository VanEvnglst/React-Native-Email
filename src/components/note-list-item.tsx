import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Box,Text  } from '../atoms';
import { Note } from '../models';

export interface ListItemProps extends Note {}

const NoteListItem: React.FC<ListItemProps> = props => {
  return (
    <Box bg='$background'>
      <Box bg='$background' px='lg' py='sm'>
        <Text fontWeight='bold' ellipsizeMode='tail' numberOfLines={1} mb='xs'>{props.title}</Text>
        <Text ellipsizeMode='tail' numberOfLines={2} fontSize={14} opacity={0.7}>{props.body}</Text>
      </Box>
    </Box>
  )
}

export default NoteListItem;
