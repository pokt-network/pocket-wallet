import styled, { css } from "styled-components";
import { colors } from '../../../utils/colors';
import { maxPhone } from "../../../utils/media";

const ToggleBtn = styled.div`
  color: ${colors.white};
  font-size: 28px;
  font-weight: 300;
  margin: 0 auto;
  text-align: center;
  display: inline-block;
  cursor: pointer;
  outline: none;
  ${maxPhone(css`
    display: block;
    font-size: 26px;
  `)};
`;

export default ToggleBtn;