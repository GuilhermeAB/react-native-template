import React from 'react';
import { RowProps } from 'react-native-easy-grid';
import { StylesProps } from 'styled-system';
import { Line } from './styles';

const Row = (props?: RowProps & StylesProps): any =>
  <Line {...props} />
;

export default Row;
