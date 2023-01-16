import React from 'react';
import { RootStackParamList } from '../navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, Text, TouchableOpacity } from '../atoms';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>

export default function DetailScreen({ navigation, route}: Props) {
  return (
    <Box flex={1} alignItems='center' justifyContent='center'>
      <Text>Detail Screen</Text>
      <Text m='lg'>{JSON.stringify(route.params)}</Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
      <Text>Go Back</Text>
      </TouchableOpacity>
    </Box>

  )
}
