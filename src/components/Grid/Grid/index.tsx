import React from 'react';
import { ColProps } from 'react-native-easy-grid';
import { StylesProps } from 'styled-system';
import Container from './styles';

const Grid = (props?: ColProps & StylesProps & any): any =>
  <Container {...props}>
    {props?.children}
  </Container>
;

export default Grid;
