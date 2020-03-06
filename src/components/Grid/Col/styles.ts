import styled from 'styled-components';
import { Col } from 'react-native-easy-grid';
import { space, layout, color, SpaceProps, LayoutProps, ColorProps, flexbox, FlexboxProps } from 'styled-system';

export default styled(Col)<SpaceProps & LayoutProps & ColorProps & FlexboxProps>`
    ${space}
    ${layout}
    ${color}
    ${flexbox}
`;
