import styled, {css} from "styled-components";
import { maxPhone } from "../../utils/media";
import { colors } from '../../utils/colors';

const ImportContent = styled.section`
  position: relative;
  max-width: 800px;
  margin: 80px auto;
  ${maxPhone(css`
    max-width: 100%;
  `)};
  h1 {
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
    margin-top: 0;
    padding-bottom: 33px;
    margin-bottom: 50px;
    ${maxPhone(css`
      font-size: 33px;
      max-width: 100%;
      line-height: 1;
      margin-bottom: 30px;
    `)};
  }
  .keys {
    max-width: 365px;
    margin: 0 auto;
    margin-top: 25px;
    border-radius: 12px;
    box-shadow: 0 43px 39px -40px rgba(0, 0, 0, 0.5);
    background-color: ${colors.white};
    padding: 45px 85px 25px 85px;
    text-align: center;
    ${maxPhone(css`
      padding: 35px 20px;
    `)};
    &.first {
      margin-bottom: 73px;
      ${maxPhone(css`
        margin-bottom: 40px;
      `)};
    }
    &.second {
      .btn-subm {
        margin-bottom: 10px;
        ${maxPhone(css`
          margin-bottom: 0;
        `)};
      }
    }
    .cont-input {
      max-width: 350px;
      margin: 0 auto;
      label {
        display: block;
        text-align: left;
        margin: 0 0 5px 15px;
        color: ${colors.darkBlue};
        font-size: 21px;
        font-weight: 700;
        text-transform: uppercase;
        ${maxPhone(css`
          font-size: 18px;
        `)};
      }
      input {
        width: calc(100% - 36px);
      }
      input#passp,
      input#private {
        padding-top: 4px;
        padding-bottom: 4px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 800;
        font-size: 16px;
        line-height: 1;
        &::placeholder {
          color: ${colors.lightGray};
          opacity: 1;
          font-weight: 800;
          font-size: 18px;
          letter-spacing: 2px;
          line-height: 1;
        }
      }
      .error {
        font-size: 12px;
        margin-right: 10px;
        margin-top: 3px;
        img {
          margin-right: 2px;
        }
      }
    }
    .btn-subm {
      position: relative;
      margin: 2px 0 35px 0;
      text-align: center;
      min-height: 32px;
      ${maxPhone(css`
        margin: 10px 0 33px 0;
      `)};
      .second & {
        margin-top: 15px;
      }
      a {
        margin-top: 6px;
        display: inline-block;
        ${maxPhone(css`
          display: inline-block;
          margin: 0 auto;
          width: calc(100% - 100px);
        `)};
      }
    }
    .account {
      color: ${colors.blue};
      text-decoration: none;
      font-size: 16px;
      font-weight: 300;
      ${maxPhone(css`
        font-size: 14px;
      `)};
    }
  }
`;

export default ImportContent;