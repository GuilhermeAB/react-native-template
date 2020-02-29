import React from 'react';
import { RowProps } from 'react-native-easy-grid';
import { StylesProps } from 'styled-system';
import { Line } from './styles';

const Row = (props?: RowProps & StylesProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Line {...props} />
);

export default Row;
