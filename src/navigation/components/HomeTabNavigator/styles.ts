import styled from 'styled-components';
import { Row } from 'components/Grid';
import { TouchableRipple } from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeTabProps } from '.';

type IsActive = { isActive: boolean, };

export const BottomNavigator = styled(Row)``;

export const Button = styled(TouchableRipple)<HomeTabProps>`
    flex: 1;
    justify-content: center;
    border-radius: 0;
    background-color: ${({ theme }: HomeTabProps ): string | undefined => theme?.style.colors.primary};
`;
// background-color: ${(props: Props ): string => props.isActive ? props.theme.style.colors.accent : props.theme.style.colors.primary};

export const Icon = styled(MaterialIcon)<HomeTabProps & IsActive>`
    font-size: 20px;
    align-self: center;
    color: ${
  ({ isActive, theme }: HomeTabProps & IsActive): string | undefined => {
    if (isActive) {
      return '#fff';
    }
    return theme?.style.colors.accent;
  }
};
`;
