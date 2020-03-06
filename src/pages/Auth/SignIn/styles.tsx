import styled from 'styled-components';
import { space, layout, color, SpaceProps, LayoutProps, ColorProps } from 'styled-system';
import Logo from 'src/assets/book_lover.svg';

// eslint-disable-next-line import/prefer-default-export
export const SignInLogo = styled(Logo)<SpaceProps & LayoutProps & ColorProps>`
    ${space};
    ${layout};
    ${color}
`;
