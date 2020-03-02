import React from 'react';
import { ButtonProps } from 'react-native';
import { StylesProps } from 'styled-system';
import { AppState } from 'store/';
import { ThemeState } from 'store/theme';
import { connect } from 'react-redux';
import Btn from './styles';

export type BtnProps = ButtonProps & StylesProps & any & ThemeState;

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
