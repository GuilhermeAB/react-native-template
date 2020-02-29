import React from 'react';
import { ColProps } from 'react-native-easy-grid';
import { StylesProps } from 'styled-system';
import { Column } from './styles';

const Col = (props?: ColProps & StylesProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Column {...props} />
);

export default Col;
