import styled, { css } from "styled-components";
import { maxPhone } from "../../utils/media";

const StyledUl = styled.ul`
  position: relative;
  list-style-type: none;
  padding-left: 0;
  ${maxPhone(css`
    padding: 5px 20px 0 20px;
  `)};
`;

export default StyledUl;