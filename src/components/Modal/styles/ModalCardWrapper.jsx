import styled from "styled-components";
import { respondTo } from "../../../styles/mixins/responsive";

const ModalCardWrapper = styled.div`
    background: #fff;
    cursor: default;
    position: absolute;
    width: 50%;
    height: 100vh;
    padding: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    outline: none;
    display: flex;
    flex-direction: column;

    ${respondTo.sm`
        top: 60px;
        padding: 1rem;
        border-radius: 0.5rem;
        height: unset;
        min-height: 420px;
    `}

    transition-property: background, color;
    transition: all 300ms ease;
`;

export default ModalCardWrapper;