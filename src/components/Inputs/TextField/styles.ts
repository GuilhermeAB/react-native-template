import styled from 'styled-components';
import { space, layout, color } from 'styled-system';
import { TextInput } from 'react-native-paper';
import { TextFieldProps } from '.';

export default styled(TextInput).attrs<TextFieldProps>((props: TextFieldProps): any => ({
  underlineColor: props.theme.style.colors.primary,
}))`
    ${space};
    ${layout};
    ${color};
`;
