import styled, {css} from "styled-components";
import { maxPhone } from "../../utils/media";
import { colors } from '../../utils/colors';

const CreateContent = styled.section`
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
  }
  .passphrase {
    max-width: 481px;
    margin: 0 auto;
    margin-top: 25px;
    border-radius: 12px;
    box-shadow: 0 43px 39px -40px rgba(0, 0, 0, 0.5);
    background-color: ${colors.white};
    padding: 35px 27px 20px 27px;
    text-align: center;
    ${maxPhone(css`
      padding: 35px 20px;
    `)};
    h2 {
      margin-top: 0;
      margin-bottom: 24px;
      color: ${colors.darkBlue};
      font-size: 21px;
      font-weight: 700;
      text-transform: uppercase;
      ${maxPhone(css`
        font-size: 18px;
      `)};
    }
    p {
      font-size: 14px;
      font-weight: 300;
      color: ${colors.darkGray};
      text-align: left;
      margin-bottom: 28px;
    }
    .cont-input {
      max-width: 312px;
      margin: 0 auto;
      input#passp {
        padding-top: 4px;
        padding-bottom: 4px;
        color: ${colors.darkBlue};
        font-family: 'Open Sans', sans-serif;
        font-weight: 800;
        font-size: 16px;
        line-height: 1;
        &::placeholder {
          color: ${colors.gray};
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
      margin: 15px 0 37px 0;
      text-align: center;
      min-height: 32px;
      ${maxPhone(css`
        margin: 33px 0;
      `)};
      a {
        ${maxPhone(css`
          display: inline-block;
          margin-left: 0 !important;
          left: 0 !important;
        `)};
        &:first-of-type {
          padding: 9px 46px;
          margin-left: -72.5px;
          ${maxPhone(css`
            display: inline-block;
            width: calc(100% - 92px);
          `)};
        }
        &:last-of-type {
          padding: 9px 27px;
          margin-left: -45px;
          ${maxPhone(css`
            display: inline-block;
            width: calc(100% - 54px);
          `)};
        }
        position: absolute;
        left: 50%;
      }
    }
    .account {
      color: ${colors.blue};
      text-decoration: none;
      font-size: 12px;
      font-weight: 300;
    }
  }
  .alert {
    position: relative;
    max-width: 535px;
    margin: 25px auto 0 auto;
    background-color: ${colors.footerBg};
    border-radius: 10px;
    box-shadow: 0 6px 25px -8px rgba(6, 32, 46, 0.1);
    .cont-alert {
      padding: 30px 20px 30px 60px;
      .title {
        h3 {
          margin-top: 0;
          text-transform: uppercase;
          color: ${colors.alert};
          font-size: 18px;
          font-weight: 800;
        }
      }
      p {
        color: ${colors.white};
        font-size: 14px;
        margin-bottom: 0;
      }
    }
    img {
      position: absolute;
      max-width: 36px;
      left: 15px;
      top: 26px;
      ${maxPhone(css`
        top: 34px;
      `)};
    }
  }
`;

export default CreateContent;