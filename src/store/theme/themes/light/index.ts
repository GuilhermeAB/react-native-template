import { Theme, DefaultTheme } from 'react-native-paper';

const theme: Theme = {
  ...DefaultTheme,
  // roundness: 0,
  colors: {
    ...DefaultTheme.colors,
    primary: '#25A23F', // 2db0bc
    accent: '#25A23F', // 4eb0bc
    // text: '#F50057',
    // placeholder: '#F50057',
  },
};

export default theme;
