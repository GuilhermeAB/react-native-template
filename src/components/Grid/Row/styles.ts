import styled from 'styled-components';
import { Row } from 'react-native-easy-grid';
import { space, layout, color, SpaceProps, LayoutProps, ColorProps, FlexboxProps, flexbox } from 'styled-system';

export default styled(Row)<SpaceProps & LayoutProps & ColorProps & FlexboxProps>`
    ${space}
    ${layout}
    ${color}
    ${flexbox}
`;
