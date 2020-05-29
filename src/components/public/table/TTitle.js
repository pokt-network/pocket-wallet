import styled from "styled-components";
import { colors } from '../../../utils/colors';

const TTitle = styled.caption`
    font-family: 'Open Sans', sans-serif;
    color: ${colors.white};
    font-size: 21px;
    font-weight: 900;
    text-transform: uppercase;
    background-image: linear-gradient(95deg, ${colors.blue} 28%, ${colors.darkBlue} 113%);
    padding: 25px 20px;
    text-align: left;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
`;

export default TTitle;