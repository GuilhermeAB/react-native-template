import { Theme, DefaultTheme } from 'react-native-paper';

const theme: Theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#303030',
    accent: '#828282',
    background: '#4f4f4f',
  },
};

export default theme;
