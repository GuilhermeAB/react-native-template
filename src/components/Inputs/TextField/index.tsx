import React from 'react';
import { LayoutProps, SpaceProps, ColorProps, FlexboxProps } from 'styled-system';
import { connect } from 'react-redux';
import { ThemeState } from 'store/theme';
import { AppState } from 'store/';
import { TextInputProps } from 'react-native';
import TextInput from './styles';

export type TextFieldProps = TextInputProps & FlexboxProps & LayoutProps & SpaceProps & ColorProps & { theme?: ThemeState, } & any;

const TextField = (props?: TextFieldProps): any =>
  <TextInput mode='outlined' {...props} />
;

const mapStateToProps = (state: AppState, props: TextFieldProps): any => ({
  theme: state.theme,
  props: props,
});

export default connect(mapStateToProps, undefined)(TextField);
