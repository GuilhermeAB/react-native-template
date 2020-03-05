import React from 'react';
import { StylesProps } from 'styled-system';
import { connect } from 'react-redux';
import { ThemeState } from 'store/theme';
import { AppState } from 'store/';
import { ImageBackgroundProps, StyleSheet } from 'react-native';
import ImageBackground from './styles';

export type DotBackgroundProps = ImageBackgroundProps & StylesProps & ThemeState & any;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: '100%',
  },
});

const DotBackground = (props?: DotBackgroundProps): any =>
  <ImageBackground style={styles.imageBackground} source={props.theme.style.dark ? undefined : require('../../assets/background_dot.png')} resizeMode='repeat' {...props}>
    {props?.children}
  </ImageBackground>
;

const mapStateToProps = (state: AppState, props: DotBackgroundProps): any => ({
  theme: state.theme,
  props: props,
});

export default connect(mapStateToProps, undefined)(DotBackground);
