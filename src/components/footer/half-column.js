import styled, { css } from "styled-components";
import { maxPhone, tablet, desktop } from "../../utils/media";

const HalfColumn = styled.div`
    ${maxPhone(css`
        width: 100%;
    `)};
    ${desktop(css`
        flex-basis: calc(50% - 10px);
        flex-grow: 0;
        flex-shrink: 0;
        width: calc(50% - 10px);
    `)};
    ${tablet(css`
        width: auto;
    `)};
    &:nth-child(odd) {
        ${desktop(css`
            margin: 0 30px 0 0;
        `)};
        ${tablet(css`
            margin: 0 3% 0 0;
        `)};
    }
    ${maxPhone(css`
        &:last-child {
            margin-top: 55px;
        }
    `)};
`;

export default HalfColumn;