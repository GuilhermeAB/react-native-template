import React from 'react';
import { RowProps } from 'react-native-easy-grid';
import { LayoutProps, SpaceProps, ColorProps, FlexboxProps } from 'styled-system';
import Line from './styles';

const Row = (props?: RowProps & FlexboxProps & LayoutProps & SpaceProps & ColorProps & { children?: any, }): any =>
  <Line {...props}>
    {props?.children}
  </Line>
;

export default Row;
