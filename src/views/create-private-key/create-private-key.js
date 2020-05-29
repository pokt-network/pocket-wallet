import styled, {css} from "styled-components";
import { maxPhone } from "../../utils/media";
import { colors } from '../../utils/colors';

const CreatePrivateKey = styled.section`
  position: relative;
  max-width: 800px;
  margin: 80px auto;
  ${maxPhone(css`
    max-width: 100%;
  `)};
  .quantitypokt {
    text-align: center;
    padding-bottom: 35px;
    margin-bottom: 50px;
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
    ${maxPhone(css`
      margin-bottom: 20px;
    `)};
    .container {
      max-width: 535px;
      margin: 0 auto;
      h1 {
        font-size: 55px;
        color: ${colors.white};
        margin-top: 0;
        margin-bottom: 10px;
        ${maxPhone(css`
          font-size: 48px;
        `)};
      }
      .stats {
        display: flex;
        justify-content: space-between;
        padding: 0 22px;
        .stat {
          &:first-of-type {
            img {
              max-width: 20px;
              margin-right: 5px;
            }  
          }
          &:last-of-type {
            img {
              max-width: 19px;
              margin-left: 10px;
            }  
          }
          span {
            font-size: 28px;
            font-weight: 300;
            color: ${colors.white};
            text-transform: uppercase;
            ${maxPhone(css`
              font-size: 23px;
            `)};
          }
          img {

          }
        }
      }
    }
  }
  .pass-pk {
    max-width: 535px;
    margin: 0 auto;
    margin-top: 25px;
    text-align: center;
    ${maxPhone(css`
      padding: 35px 0;
      max-width: 100%;
    `)};
    .cont-input {
      &.second {
        margin-bottom: 24px;
      }
      input {
        background-color: #f5f5f5;
        border: none;
        border-radius: 23px;
        padding: 15px 18px;
        &#prk {
          
        }
      }
      label {
        text-transform: uppercase;
        font-size: 18px;
        font-weight: 700;
        color: ${colors.white};
        display: block;
        text-align: left;
        margin-bottom: 10px;
      }
    }
    .alert {
      position: relative;
      max-width: 100%;
      margin: 30px auto 40px auto;
      background-color: ${colors.footerBg};
      border-radius: 10px;
      box-shadow: 0 6px 25px -8px rgba(6, 32, 46, 0.1);
      .cont-alert {
        padding: 30px 20px 30px 60px;
        text-align: left;
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
    .btn-subm {
      margin-top: 55px;
      a {
        padding: 9px 31px;
        ${maxPhone(css`
          margin: 0;
        `)};
      }
    }
  }
`;

export default CreatePrivateKey;