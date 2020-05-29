import { createGlobalStyle } from 'styled-components';
import { css } from "styled-components";
import { maxPhone } from "../utils/media";

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700,900');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');
    font-family: 'Lato', sans-serif;
  }
  .page-container {
    background-image: linear-gradient(126deg, #27a9e0 19%, #092e40 94%, #06202e 100%);
    ${maxPhone(css`
      background-image: linear-gradient(161deg, #27a9e0 -3%, #092e40 93%, #06202e 100%);
    `)};
  }
  .error {
    display: block;
    margin-top: 1px;
    color: #fa5849;
    font-size: 14px;
    font-weight: 300;
    margin-right: 17px;
    text-align: right;
    ${maxPhone(css`
      margin-right: 10px;
    `)};
    img {
      max-width: 12px;
      margin-right: -2px;
    }
  }
  .popup-content {
    max-width: 535px;
    padding: 0 !important;
    border-radius: 12px;
    box-shadow: 0 43px 39px -40px rgba(0, 0, 0, 0.5);
    background-image: linear-gradient(to bottom, #fbfbfb, #f5f5f5);
    ${maxPhone(css`
      max-width: 96%;
      width: 96% !important;
    `)};
  }
`;

export default GlobalStyles;