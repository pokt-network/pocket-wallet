import styled, { css } from "styled-components";
import { maxPhone, maxTablet } from "../../../utils/media";

const Tr = styled.tr`
    position: relative;
    width: 100%;
    transform: scale(1);
    &:after {
        content: '';
        display: block;
        margin: auto;
        position: absolute;
        bottom: 0;
        height: 1px;
        background: #f5f5f5;
        left: 50%;
        margin-left: -47%;
        width: 94%;
        ${maxTablet(css`
            margin-left: -47.5%;
            width: 95%;
        `)};
        ${maxPhone(css`
            margin-left: -48.25%;
            width: 96.5%;
        `)};
        .detail-table & {
            margin-left: -46%;
            width: 92%;
        }
    }
    .states & {
        &:after {
            display: none;
        }
    }
    &:nth-child(odd) {
        .detail-table.mobile & {
            &:after {
                display: none;
            }
        }
    }
`;

export default Tr;