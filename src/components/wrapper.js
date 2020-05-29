import styled, { css } from "styled-components";
import { maxPhone } from "../utils/media";

const Wrapper = styled.div`
  width: 100%;
  max-width: 96%;
  margin: 0 auto;
  display: flex;
  &.wide-block-wr {
      display: block;
  }
  ${maxPhone(css`
    &.footer-w {
      display: block;
   }
  `)};
  @media (min-width: 900px) {
    max-width: 870px;
  }
  @media (min-width: 1200px) {
    max-width: 1100px;
  }
  &.header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    ${maxPhone(css`
      height: 70px;
      grid-template-columns: 1fr;
    `)};
  }
`;

export default Wrapper;