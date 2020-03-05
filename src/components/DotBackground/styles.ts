import { ImageBackground } from 'react-native';
import styled from 'styled-components';
import { layout } from 'styled-system';
import { DotBackgroundProps } from '.';

export default styled(ImageBackground)`
    ${layout};
    background: ${(props: DotBackgroundProps): string => props.theme.style.colors.background};
`;
