import { Theme, DefaultTheme } from 'react-native-paper';

const theme: Theme = {
  ...DefaultTheme,
  roundness: 0,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2db0bc',
    accent: '#4eb0bc',
    text: '#000000',
  },
};

export default theme;
