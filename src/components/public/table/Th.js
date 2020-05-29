import styled, { css } from "./node_modules/styled-components";
import { colors } from '../../../utils/colors';
import { maxPhone, maxTablet } from "../../../utils/media";

const Th = styled.th`
    font-family: 'Open Sans', sans-serif;
    text-align: left;
    font-size: 12px;
    color: ${colors.darkBlue};
    font-weight: 900;
    text-transform: uppercase;
    padding: 25px 15px 15px 15px;
    ${maxPhone(css`
        padding: 15px 10px;
    `)};
    &:nth-child(2) {
        padding-left: 10px;
    }
    tr & {
        .detail-table.desktop & {
            padding-top: 12px;
            padding-bottom: 12px;
            padding-left: 38px;
        }
    }
    tr:first-of-type & {
        .detail-table.desktop & {
            padding-top: 40px;
        }
    }
    tr:last-of-type & {
        .detail-table.desktop & {
            padding-bottom: 40px;
        }
    }
    tr & {
        .detail-table.mobile & {
            padding: 12px 20px 10px 25px;
            width: 360px;
        }
    }
    tr:first-of-type & {
        .detail-table.mobile & {
            padding-top: 40px;
        }
    }
`;

export default Th;