import styled from 'styled-components';
import { respondTo } from '../../../styles/mixins/responsive';

const HeaderLogo = styled.img`
  display: none;
  height: 30px;
  flex-basis: 10%;
  position: relative;
  padding-right: 20px;
  border-right: 1px solid ${({ theme }) => theme.text};
  transition: border-right-color 300ms ease;

  ${respondTo.sm`
        display: block;
    `}
`;

export default HeaderLogo;
