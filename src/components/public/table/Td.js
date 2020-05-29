import styled, { css } from "styled-components";
import { colors } from '../../../utils/colors';
import { maxPhone } from "../../../utils/media";

const Td = styled.td`
    text-align: left;
    color: ${colors.darkBlue};
    font-weight: 700;
    font-size: 12px;
    padding: 8px 15px;
    ${maxPhone(css`
        font-size: 14px;
        padding: 15px 8px;
    `)};
    a {
        color: ${colors.blueLink};
        text-decoration: none;
        font-weight: 300;
    }
    .l-tx & {
        &:first-child {
            padding-left: 30px;
            padding-right: 0;
            ${maxPhone(css`
                max-width: 120px;
                background-position: 10px 13px;
                padding-left: 10px;
            `)};
        }
        &:nth-of-type(2) {
            padding-left: 10px;
            .qty {
                font-family: 'Open Sans', sans-serif;
                color: ${colors.darkBlue};
                font-weight: 900;
                font-size: 12px;
                ${maxPhone(css`
                    font-size: 10px;
                `)};
            }
            span {
                font-size: 10px;
            }
            .status {
                font-size: 10px;
                font-weight: 300;
                color: ${colors.gray};
            }
        }
        &:nth-of-type(3) {
            color: ${colors.gray};
            font-weight: 300;
            ${maxPhone(css`
                text-align: center;
                font-size: 12px;
            `)};
        }
        &:nth-child(4) {
            max-width: 190px;
            padding-right: 27px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: ${colors.blueLink};
            ${maxPhone(css`
                max-width: 100px;
                padding-right: 0;
            `)};
            a {
                color: ${colors.blueLink};
                font-weight: 300;
                font-size: 12px;
            }
        }
        img {
            max-width: 20px;
        }
    }
    tr:first-of-type & {
        .detail-table.desktop & {
            padding-top: 40px;
            color: ${colors.blueLink};
            font-family: 'Open Sans', sans-serif;
            font-weight: 700;
        }
    }
    tr:last-of-type & {
        .detail-table.desktop & {
            padding-bottom: 40px;
            color: ${colors.blueLink};
        }
    }
    tr:nth-of-type(2) & {
        .detail-table.desktop & {
            padding-top: 12px;
            padding-bottom: 12px;
            position: relative;
            &:first-of-type {
                span {
                    position: absolute;
                    top: 16px;
                    left: 44px;
                }
            }
            &:last-of-type {
                text-align: right;
                span {
                    position: absolute;
                    top: 16px;
                    right: 44px;
                }
            }
            img {
                max-width: 20px;
                display: inline-block;
            }
            span {
                font-size: 10px;
                font-weight: 300;
                color: #888888;
                display: inline-block;
            }
        }
    }
    tr:nth-of-type(4) & {
        .detail-table.desktop & {
            font-family: 'Open Sans', sans-serif;
            font-weight: 700;
            color: ${colors.darkBlue};
            span {
                font-size: 10px;
            }
        }
    }
    tr & {
        .detail-table.desktop & {
            padding-top: 12px;
            padding-bottom: 12px;
            font-weight: 300;
            color: ${colors.darkGray};
        }
    }
    tr & {
        .detail-table.mobile & {
            padding: 12px 20px 10px 25px;
            font-size: 12px;
            font-weight: 300;
            color: ${colors.darkGray};
            width: 360px;
        }
    }
    tr:last-of-type & {
        .detail-table.mobile & {
            padding-bottom: 40px;
            color: ${colors.blueLink};
        }
    }
    tr:nth-of-type(2) & {
        .detail-table.mobile & {
            color: ${colors.blueLink};
            font-family: 'Open Sans', sans-serif;
            font-weight: 700;
        }
    }
    tr:nth-of-type(4) & {
        .detail-table.mobile & {
            padding-top: 0;
            padding-bottom: 5px;
            position: relative;
            &:first-of-type {
                span {
                    position: absolute;
                    top: 4px;
                    left: 52px;
                }
            }
            &:last-of-type {
                text-align: right;
                span {
                    position: absolute;
                    top: 4px;
                    right: 44px;
                }
            }
            img {
                max-width: 20px;
                display: inline-block;
            }
            span {
                font-size: 10px;
                font-weight: 300;
                color: #888888;
                display: inline-block;
            }
        }
    }
    tr:nth-of-type(8) & {
        .detail-table.mobile & {
            font-family: 'Open Sans', sans-serif;
            font-weight: 700;
            color: ${colors.darkBlue};
            span {
                font-size: 10px;
            }
        }
    }
    tr:nth-child(even) & {
        .detail-table.mobile & {
            padding-top: 0;
        }
    }
`;

export default Td;