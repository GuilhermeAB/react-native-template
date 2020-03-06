import styled from 'styled-components';
import { space, layout, color } from 'styled-system';
import { Button } from 'react-native-paper';
import { BtnProps } from '.';

export default styled(Button)<BtnProps & typeof Button>`
    ${space};
    ${layout};
    ${color};
`;
