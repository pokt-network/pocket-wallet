import styled, { css } from "styled-components";
import { colors } from '../../utils/colors';
import { maxPhone } from "../../utils/media";

const LandingContent = styled.section`
  position: relative;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 120px 0 130px 0;
  ${maxPhone(css`
    padding: 60px 0 150px 0;
  `)};
  .top {
    padding-bottom: 60px;
    background:
      linear-gradient(
        to right, 
        #fff 27%,
        #27a9e0 100%
      )
      right 
      bottom    
      no-repeat; 
    background-size: 100% 1px;
    .title {
      margin-bottom: 27px;
      h1 {
        margin: 0 0 15px 0;
        font-size: 55px;
        text-transform: uppercase;
        color: ${colors.white};
        line-height: 1;
        ${maxPhone(css`
          font-size: 33px;
        `)};
        span {
          font-weight: 300;
          display: block;
        }
        img {
          max-width: 45px;
          ${maxPhone(css`
            max-width: 27px;
          `)};
        }
      }
    }
  }
  .bottom {
    margin-top: 55px;
    ${maxPhone(css`
      margin-top: 42px;
    `)};
    .btns {
      margin-top: 27px;
      a {
        ${maxPhone(css`
          margin-bottom: 20px;
        `)};
      }
    }
    h1 {
      ${maxPhone(css`
        margin-bottom: 35px;
      `)};
    }
  }
`;

export default LandingContent;