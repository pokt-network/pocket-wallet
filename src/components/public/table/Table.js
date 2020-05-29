import styled, { css } from "styled-components";
import { colors } from '../../../utils/colors';
import { maxPhone, tablet } from "../../../utils/media";

const T = styled.table`
    position: relative;
    border-collapse: collapse;
    border-radius: 12px;
    box-shadow: 0 6px 25px -8px rgba(0, 0, 0, 0.23);
    background-color: ${colors.white};
    margin: 0 auto;
    &.detail-table {
        width: 535px;
        ${maxPhone(css`
            max-width: 100%;
            width: 100%;
        `)};
        ${tablet(css`
            &.desktop {
                display: block;
            }
            &.mobile {
                display: none;
            }
        `)};
        ${maxPhone(css`
            &.desktop {
                display: none;
            }
            &.mobile {
                display: block;
            }
        `)};
    }
    .states {
        width: 100%;
    }
`;


export default T;