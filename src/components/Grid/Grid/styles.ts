import styled from 'styled-components';
import { Grid } from 'react-native-easy-grid';
import { space, layout, color, SpaceProps, LayoutProps, ColorProps, flexbox, FlexboxProps } from 'styled-system';

export default styled(Grid)<SpaceProps & LayoutProps & ColorProps & FlexboxProps>`
    ${space}
    ${layout}
    ${color}
    ${flexbox}
`;
