import styled, {css} from "styled-components";
import { maxPhone } from "../../utils/media";
import { colors } from '../../utils/colors';

const SendContent = styled.section`
  position: relative;
  max-width: 800px;
  margin: 80px auto;
  ${maxPhone(css`
    max-width: 100%;
  `)};
  h1 {
    margin-top: 0;
  }
  .quantity {
    margin-top: 70px;
    text-align: center;
    .row {
      &:first-of-type {
        padding-bottom: 13px;
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
        input {
          &::placeholder {
            color: ${colors.darkBlue};
            opacity: 1;
            font-family: 'Open Sans', sans-serif;
            font-weight: 800;
            font-size: 30px;
            line-height: 1.5;
          }
        }
        input,
        label {
          color: ${colors.darkBlue};
          font-family: 'Open Sans', sans-serif;
          font-weight: 800;
          font-size: 30px;
          line-height: 1.2;
        }
      }
      &:last-of-type {
        padding-top: 13px;
        input {
          &::placeholder {
            color: ${colors.white};
            opacity: 1;
            font-weight: 300;
            font-size: 28px;
            line-height: 1.5;
          }
        }
        input,
        label {
          line-height: 1.2;
          font-weight: 300;
          font-size: 28px;
          color: ${colors.white};
        }
      }
      .container {
        max-width: 535px;
        margin: 0 auto;
        display: flex; 
        justify-content: space-between;
        ${maxPhone(css`
          max-width: 100%;
        `)};
        input {
          background-color: transparent;
          border: none;
          outline: none;
          max-width: 200px;
        }
      }
    }
  }
  .send-form {
    max-width: 535px;
    margin: 0 auto;
    margin-top: 25px;
    border-radius: 12px;
    box-shadow: 0 43px 39px -40px rgba(0, 0, 0, 0.5);
    background-image: linear-gradient(to bottom, #fbfbfb, #f5f5f5);
    ${maxPhone(css`
      margin-top: 35px;
    `)};
    .container {
      padding: 40px 90px 27px 85px;
      ${maxPhone(css`
        padding: 40px 30px 25px 30px;
      `)};
    }
    #adrs {
      max-width: 312px;
      width: 100%;
      ${maxPhone(css`
        max-width: calc(100% - 36px);
      `)};
    }
    label {
      font-weight: 300;
      color: ${colors.darkBlue};
      display: block;
      padding-left: 8px;
      ${maxPhone(css`
        padding-left: 0;
      `)};
      &:first-of-type {
        font-size: 14px;
        text-align: left;
        margin-bottom: 10px;
      }
      &:last-of-type {
        font-size: 16px;
        text-transform: uppercase;
        margin-top: 20px;
        text-align: left;
      }
    }
    .btn-subm {
      a {
        margin-top: 35px;
        display: inline-block;
        padding: 9px 60px;
        cursor: pointer;
        ${maxPhone(css`
          width: calc(100% - 120px);
          margin-left: 0;
        `)};
      }
      .error {
        text-align: center;
        margin-right: 0;
      }
    }
  }
`;

export default SendContent;