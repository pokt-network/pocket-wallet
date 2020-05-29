import styled, {css} from "styled-components";
import { maxPhone } from "../../utils/media";
import { colors } from '../../utils/colors';

const PopupContent = styled.div`
  position: relative;
  padding: 30px 40px !important;
  ${maxPhone(css`
    padding: 30px 20px !important;
  `)}
  h2 {
    color: ${colors.darkBlue};
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    max-width: 365px;
    margin: 16px auto;
    ${maxPhone(css`
      margin-top: 25px;
      max-width: 100%;
      font-size: 18px;
    `)}
  }
  .close {
    position: absolute;
    display: block;
    right: 10px;
    top: 10px;
    padding: 0 !important;
    margin-top: 0 !important;
    ${maxPhone(css`
      width: initial !important;
    `)}
    img {
      max-width: 16px;
      width: 16px;
    }
  }
  .content {
    .qty {
      display: flex; 
      justify-content: space-between;
      margin: 40px auto 50px auto;
      max-width: 365px;
      ${maxPhone(css`
        flex-direction: column;
        margin: 35px auto 40px auto;
      `)}
      .pokt {
        font-size: 30px;
        color: ${colors.blueLink};
        font-weight: 800;
        font-family: 'Open Sans', sans-serif;
        ${maxPhone(css`
          margin-bottom: 15px;
          font-size: 26px;
        `)}
      }
      .usd {
        font-size: 30px;
        color: ${colors.blueLink};
        font-weight: 300;
        ${maxPhone(css`
          font-size: 26px;
        `)}
      }
    }
    .pass-pk {
      .cont-input {
        label {
          font-size: 18px;
          color: ${colors.darkBlue};
          font-weight: 700;
          font-family: 'Open Sans', sans-serif;
        }
        input {
          background-color: #f0f0f0;
          border: none;
          padding: 15px 18px;
          font-size: 16px;
          color: ${colors.darkGray};
          ${maxPhone(css`
            font-size: 12px;
          `)}
        }
      }
    }
  }
`;

export default PopupContent;