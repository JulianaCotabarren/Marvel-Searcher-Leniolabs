import styled from 'styled-components';
import { respondTo } from '../../../styles/mixins/responsive';

const HeaderLogo = styled.img`
    display: none;
    height: 30px;
    flex-basis: 10%;
    position: relative;
    padding-right: 10px;
    border-right: 1px solid #A6A2A2;
    transition: border-right-color 300ms ease;

    ${respondTo.sm`
        display: block;
    `}
`;

export default HeaderLogo;