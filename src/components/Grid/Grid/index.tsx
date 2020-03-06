import React from 'react';
import { ColProps } from 'react-native-easy-grid';
import { LayoutProps, SpaceProps, ColorProps, FlexboxProps } from 'styled-system';
import Container from './styles';

const Grid = (props?: ColProps & FlexboxProps & LayoutProps & SpaceProps & ColorProps & { children?: any, }): any =>
  <Container {...props}>
    {props?.children}
  </Container>
;

export default Grid;
