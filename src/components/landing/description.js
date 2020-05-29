import styled, {css} from 'styled-components';
import { colors } from '../../utils/colors';
import { maxPhone } from "../../utils/media";

const Description = styled.p`
  font-size: 18px;
  line-height: 1.2em;
  color: ${colors.white};
  font-weight: 300;
  margin-bottom: 9px;
  max-width: 490px;
  margin: 0 auto;
  ${maxPhone(css`
    font-size: 16px;
    line-height: 1.4;
    max-width: 80%;
  `)};
`;

export default Description;