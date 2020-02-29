import { Theme, DefaultTheme } from 'react-native-paper';

const theme: Theme = {
  ...DefaultTheme,
  dark: true,
  roundness: 0,
  colors: {
    ...DefaultTheme.colors,
    primary: '#757575',
    accent: '#00808c',
    text: '#ffffff',
  },
};

export default theme;
