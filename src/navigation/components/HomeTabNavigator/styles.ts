import styled from 'styled-components';
import { Row } from 'components/Grid';
import { TouchableRipple } from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeState } from 'store/theme';

type Props = { isActive: boolean, theme: ThemeState, };

export const BottomNavigator = styled(Row)``;

export const Button = styled(TouchableRipple)<Props>`
    flex: 1;
    justify-content: center;
    border-radius: 0;
    background-color: ${(props: Props ): string => props.theme.style.colors.primary};
`;
// background-color: ${(props: Props ): string => props.isActive ? props.theme.style.colors.accent : props.theme.style.colors.primary};

export const Icon = styled(MaterialIcon)<Props>`
    font-size: 20px;
    align-self: center;
    color: ${
  (props: Props): string => {
    if (props.isActive) {
      return '#fff';
    }
    return props.theme.style.colors.accent;
  }
};
`;
