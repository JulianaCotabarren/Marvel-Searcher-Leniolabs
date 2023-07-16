import styled from "styled-components";
import { respondTo } from "../../../styles/mixins/responsive";

const FavoritesWrapper = styled.div`
    min-height: 100vh;
    padding: 5rem 0 2rem 0;
    background: transparent;
    max-width: 1280px;
    margin: 0 auto;

    ${respondTo.sm`
        padding: 5rem 0 2rem 0;
    `}
`;

export default FavoritesWrapper;