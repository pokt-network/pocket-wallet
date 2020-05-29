import React from "react";
import styled, { css } from "styled-components";
import { tablet, maxPhone } from "../../utils/media";
import { colors } from '../../utils/colors';

import StyledLink from "./link";

  const MenuButton = styled(StyledLink).attrs({
    height: null,
    width: null
  })`
  height: 16px;
  position: absolute;
  right: 0;
  top: 0;
  display: block;
  line-height: 14px;
  cursor: pointer;
  ${tablet(css`
    display: none;
  `)};
  ${maxPhone(css`
    font-size: 25px;
    right: 5%;
    top: 28px;
    color: ${colors.white};
    z-index: 9999999999999;
  `)};
`;

export default props => <MenuButton {...props}>&#9776;</MenuButton>;