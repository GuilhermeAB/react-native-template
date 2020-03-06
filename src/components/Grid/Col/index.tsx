import React from 'react';
import { ColProps } from 'react-native-easy-grid';
import { LayoutProps, SpaceProps, ColorProps, FlexboxProps } from 'styled-system';
import Column from './styles';

const Col = (props?: ColProps & FlexboxProps & LayoutProps & SpaceProps & ColorProps & { children?: any, }): any =>
  <Column {...props}>
    {props?.children}
  </Column>
;

export default Col;
