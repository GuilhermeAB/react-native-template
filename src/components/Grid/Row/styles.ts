import styled from 'styled-components';
import { Row } from 'react-native-easy-grid';
import { space, layout, color, SpaceProps, LayoutProps, ColorProps, FlexboxProps, flexbox } from 'styled-system';

export type StyledRowProps = SpaceProps & LayoutProps & ColorProps & FlexboxProps;

export default styled(Row)<StyledRowProps>`
    ${space}
    ${layout}
    ${color}
    ${flexbox}
`;
