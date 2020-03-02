import React from 'react';
import { RowProps } from 'react-native-easy-grid';
import { StylesProps } from 'styled-system';
import Line from './styles';

const Row = (props?: RowProps & StylesProps & any): any =>
  <Line {...props}>
    {props?.children}
  </Line>
;

export default Row;
