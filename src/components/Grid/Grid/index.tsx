import React from 'react';
import { ColProps } from 'react-native-easy-grid';
import { StylesProps } from 'styled-system';
import { Container } from './styles';

const Grid = (props?: ColProps & StylesProps): any =>
  <Container {...props} />
;

export default Grid;
