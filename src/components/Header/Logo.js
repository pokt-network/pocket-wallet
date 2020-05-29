import styled, { css } from "styled-components";
import { tablet } from "../../utils/media";
import { colors } from '../../utils/colors';

import StyledLink from "./link";

const Brand = styled(StyledLink)`
  margin-right: auto;
  padding: 11px 14px 11px 0;
  text-decoration: none;
  z-index: 9999999999999;
  ${tablet(css`
    padding: 0 14px;
  `)};
  img {
    max-width: 100px;
    ${tablet(css`
      vertical-align: middle;
    `)};
  }
  span {
    display: inline-block;
    vertical-align: top;
    font-weight: 300;
    font-size: 14px;
    color: ${colors.white};
    margin-top: 10px;
    margin-left: 4px;
  }
`;

export default Brand;