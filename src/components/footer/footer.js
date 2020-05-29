import styled, { css } from "styled-components";
import { desktop, tablet, tabletLandscape, maxPhone } from "../../utils/media";
import { colors } from '../../utils/colors';

const FooterContent = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.footerBg};
  padding: 67px 0 37px 0;
  ${maxPhone(css`
    padding: 60px 0 50px 0;
  `)};
  .last {
    ${maxPhone(css`
      margin-top: 40px !important;
    `)};
  }
  .social-ch {
    .title {
      h3 {
        text-transform: uppercase;
        font-size: 16px;
        color: ${colors.blue};
        font-weight: 900;
        line-height: 1;
        margin-bottom: 22px;
        margin-top: 0;
        ${maxPhone(css`
          margin-top: 0;
        `)};
      }
    }
    .description {
      p {
        font-weight: 300;
        font-size: 12px;
        color: ${colors.white};
        line-height: 1.4;
        margin-bottom: 17px;
        ${maxPhone(css`
          font-size: 14px;
        `)};
        ${tablet(css`
            max-width: 295px;
        `)};
        ${tabletLandscape(css`
            max-width: 80%;
        `)};
        ${desktop(css`
          max-width: 390px;
        `)};
      }
    }
  }
  .tech-logos {
    a {
      max-width: 27px;
      margin-right: 25px;
      text-decoration: none;
      display: inline-block;
      ${maxPhone(css`
        margin-right: 35px;
      `)};
      img {
        max-width: 100%;
        vertical-align: middle;
      }
    }
  }
  .footer-nav {
    text-align: center;
    width: 100%;
    .menu-footer {
      font-size: 0;
      background-color: transparent;
      padding: 0;
      li {
        &.mainli {
          width: calc(33.333% - 40px);
          display: inline-block;
          vertical-align: top;
          text-align: left;
          ${maxPhone(css`
            width: 100%;
            margin-bottom: 25px;
          `)};
          ${tablet(css`
            padding-left: 45px;
          `)};
          ${tabletLandscape(css`
            padding-left: 60px;
          `)};
          &:first-of-type {
            padding-left: 0;
          }
        }
        .title-sm {
          font-weight: 900;
          font-size: 16px;
          text-align: left;
          color: ${colors.blue};
          text-transform: uppercase;
          padding-bottom: 21px;
          ${maxPhone(css`
            padding-bottom: 16px;
          `)};
        }
        .sub-menu {
          padding-left: 0;
          li {
            a {
              font-size: 12px;
              font-weight: 300;
              color: ${colors.white};
              margin-bottom: 4px;
              display: inline-block;
              text-decoration: none;
            }
            &:last-child {
              a {
                margin-bottom: 0;
              }
            }
          }
        }
      }
    }
  }
`;

export default FooterContent;