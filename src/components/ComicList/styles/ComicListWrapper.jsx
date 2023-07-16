import styled from "styled-components";
import { respondTo } from "../../../styles/mixins/responsive";

const ComicsListWrapper = styled.div`
    width: 100%;
    min-height: 350px;
    max-height: 100%;
    overflow: auto;
    margin-top: 1rem;

    ${respondTo.sm`
        max-height: 400px;  
    `}
`;

export default ComicsListWrapper;