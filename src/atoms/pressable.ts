import {
  Pressable as NativePressable,
  PressableProps as NativePressableProps
} from 'react-native';
import { createBox } from '@shopify/restyle';
import { Theme } from '../themes';
import React from 'react';

const Pressable = createBox<Theme, NativePressableProps>(NativePressable)
export type PressableProps = React.ComponentProps<typeof Pressable>

export default Pressable;

