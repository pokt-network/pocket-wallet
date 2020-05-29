import styled from "styled-components";
import { colors } from '../../../utils/colors';

const TFooter = styled.tfoot`
    position: relative;
    .button {
        &.button-1 {
            background-color: ${colors.darkGray};
            color: ${colors.white};
            margin: 0;
            padding: 10px 27px;
            position: relative;
            border-radius: 25px;
            display: inline-block;
            text-transform: initial;
            font-size: 12px;
            font-weight: 500;
            line-height: 1;
            height: auto;
            overflow: visible;
            text-decoration: none;
            transition: all .3s ease-in-out;
            &:hover {
                background-color: ${colors.blue};
            }
        }
    }
    td {
        text-align: center;
        width: 100%;
        padding: 23px 0;
    }
`;

export default TFooter;