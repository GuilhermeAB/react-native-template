import { Theme, DefaultTheme } from 'react-native-paper';

const theme: Theme = {
  ...DefaultTheme,
  dark: true,
  // roundness: 0,
  colors: {
    ...DefaultTheme.colors,
    primary: '#303030',
    accent: '#ffffff', // 00808c
    // text: '#ffffff',
    // placeholder: '#ffffff',
  },
};

export default theme;
