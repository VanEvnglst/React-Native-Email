import { createRestyleComponent, createVariant, VariantProps } from '@shopify/restyle';
import React from 'react';
import { Theme } from '../themes';
import Box, { BoxProps } from './box';

const Bar = createRestyleComponent<VariantProps<Theme, 'barVariants'> & BoxProps, Theme>([createVariant({ themeKey: 'barVariants'})], Box)

export default Bar;