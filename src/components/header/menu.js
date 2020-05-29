import React from "react";
import styled, { css } from "styled-components";
import { tablet, maxPhone } from "../../utils/media";
import { colors } from '../../utils/colors';

const MenuWrapper = styled.nav`
  overflow: hidden;
  display: none;
  ${maxPhone(css`
    background-color: ${colors.blue};
    padding-bottom: 30px;
  `)};
  ${tablet(css`
    display:block;
    text-align: right;
    overflow: visible;
  `)};
  ${props =>
    maxPhone(
      props.isHidden ||
        css`
        display:block;
        width: 100%;
        top: 0;
        padding-top: 50px;
        position: fixed;
        left: 0;
        z-index: 9999;
        height: 100vh;
        background-image: linear-gradient(161deg, #27a9e0 -2%, #092e40 93%, #06202e 100%);
      `
    )};
`;

function Menu(props) {
  const children = props.children;

  return (
    <MenuWrapper isHidden={props.isHidden}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { isHidden: props.isHidden })
      )}
    </MenuWrapper>
  );
}

export default Menu;