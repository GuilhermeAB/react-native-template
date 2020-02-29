import React from 'react';
import { ColProps } from 'react-native-easy-grid';
import { StylesProps } from 'styled-system';
import { Container } from './styles';

const Grid = (props?: ColProps & StylesProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Container {...props} />
);

export default Grid;
