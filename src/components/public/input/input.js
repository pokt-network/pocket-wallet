import styled from "./node_modules/styled-components";
import { colors } from '../../../utils/colors';

const Input = styled.input`
  font-size: 14px;
  color: #afafaf;
  line-height: 1.2;
  border-radius: 21px;
  border: solid 1px ${colors.blue};
  outline: none;
  padding: 9px 18px;
  width: calc(100% - 38px);
  background-color: transparent;
  &::placeholder {
    opacity: 1;
    font-weight: 300;
    font-size: 14px;
    line-height: 1.2;
    color: #afafaf;
  }
`;

export default Input;