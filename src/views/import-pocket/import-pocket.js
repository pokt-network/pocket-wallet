import styled, {css} from "styled-components";
import { maxPhone } from "../../utils/media";
import { colors } from '../../utils/colors';

const ImportPocketContent = styled.section`
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
  }
  .quantity {
    margin: 35px auto 0 auto;
    text-align: center;
    max-width: 535px;
    .import-p-form {
      position: relative;
      ${maxPhone(css`
        margin-top: 35px;
      `)};
      .container {
        border-radius: 12px;
        box-shadow: 0 43px 39px -40px rgba(0, 0, 0, 0.5);
        background-image: linear-gradient(to bottom, #fbfbfb, #f5f5f5);
        padding: 40px 90px 27px 85px;
        ${maxPhone(css`
          padding: 40px 30px 25px 30px;
        `)};
        .cont-input {
          label {
            font-weight: 300;
            color: ${colors.darkBlue};
            display: block;
            font-size: 14px;
            text-align: left;
            margin-bottom: 10px;
            ${maxPhone(css`
              padding-left: 0;
            `)};
          }
          input {
            &::placeholder {
              opacity: 1;
              font-weight: 300;
              font-size: 14px;
              line-height: 1.2;
              color: #afafaf;
            }
          }
          .error {
            img {
              margin-right: 1px !important;
            }
          }
          &:last-of-type {
            margin-top: 20px;
          }
          .cont-file {
            padding: 17px 18px;
            background-color: transparent;
            position: relative;
            cursor: pointer;
            line-height: 1.2;
            border-radius: 21px;
            border: solid 1px ${colors.blue};
            outline: none;
            width: calc(100% - 38px);
            &:after {
              position: absolute;
              top: 8.5px;
              left: 15px;
              content: 'Choose File';
              font-size: 14px;
              font-weight: 300;
              color: #afafaf;
            }
            .upload {
              position: absolute;
              top: 0;
              right: 0;
              background-color: ${colors.blueLink};
              width: 100px;
              height: 34px;
              border-top-right-radius: 21px;
              border-bottom-right-radius: 21px;
              &:after {
                position: absolute;
                top: 10px;
                right: 30px;
                content: 'Upload';
                font-size: 12px;
                font-weight: 300;
                color: ${colors.white};
              }
            }
            input {
              position: absolute;
                z-index: 1000;
                opacity: 0;
                cursor: pointer;
                right: 0;
                top: 0;
                width: 100%;
                height: 0;
                padding: 17px 0;
            }
          }
        }
      }
      .btn-subm {
        margin-top: 5px;
        a {
          margin-top: 35px;
          display: inline-block;
          padding: 9px 60px;
          ${maxPhone(css`
            width: calc(100% - 120px);
            margin-left: 0;
            margin-right: 0;
          `)};
        }
        .error {
          text-align: center;
          margin: 12px 0 20px 0;
        }
      }
    }
  }
  .account {
    color: ${colors.white};
    text-decoration: none;
    font-size: 14px;
    font-weight: 300;
    margin-top: 35px;
    display: block;
  }
`;

export default ImportPocketContent;