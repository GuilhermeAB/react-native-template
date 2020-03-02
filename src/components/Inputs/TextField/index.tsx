import React from 'react';
import { TextInputProps } from 'react-native';
import { StylesProps } from 'styled-system';
import { connect } from 'react-redux';
import { ThemeState } from 'store/theme';
import { AppState } from 'store/';
import TextInput from './styles';

export type TextFieldProps = TextInputProps & StylesProps & any & ThemeState;

const TextField = (props?: TextInputProps): any =>
  <TextInput mode='outlined' {...props} />
;

const mapStateToProps = (state: AppState, props: TextFieldProps): any => ({
  theme: state.theme,
  props: props,
});

export default connect(mapStateToProps, undefined)(TextField);
