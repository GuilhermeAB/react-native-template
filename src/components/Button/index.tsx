import React from 'react';
import { AppState } from 'store/';
import { ThemeState } from 'store/theme';
import { connect } from 'react-redux';
import { SpaceProps, LayoutProps, ColorProps } from 'styled-system';
import { ButtonProps } from 'react-native';
import Btn from './styles';

export type BtnProps = ButtonProps & SpaceProps & LayoutProps & ColorProps & ThemeState & { children?: any, } & any;

const Button = (props?: BtnProps): any =>
  <Btn p='4px' {...props}>
    {props?.children}
  </Btn>
;

const mapStateToProps = (state: AppState, props: BtnProps): any => ({
  theme: state.theme,
  props: props,
});

export default connect(mapStateToProps, undefined)(Button);
