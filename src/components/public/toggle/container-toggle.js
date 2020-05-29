import styled, { css } from "styled-components";

const ContainerToggle = styled.div`
  display: block;
  max-width: 535px;
  margin: 50px auto 0 auto;
  opacity: 1;
  transition: all 0.5s ease-in-out;
  ${props =>
    props.isVisible ||
      css`
      display: none;
      opacity: 0;
    `};
`;

export default ContainerToggle;