import React from 'react';
import { ColProps } from 'react-native-easy-grid';
import { StylesProps } from 'styled-system';
import { Column } from './styles';

const Col = (props?: ColProps & StylesProps): any =>
  <Column {...props} />
;

export default Col;
