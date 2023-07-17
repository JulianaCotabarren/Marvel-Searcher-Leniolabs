import styled from 'styled-components';
import { respondTo } from '../../../styles/mixins/responsive';

const HeaderActions = styled.div`
  flex-basis: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${respondTo.xs`
    flex-basis: 20%;
  `}
  ${respondTo.sm`
    flex-basis: 15%;
  `}

  & > a {
    color: inherit;
    text-decoration: none;
    font-weight: 300;
    position: relative;
    flex-basis: 40%;
  }
`;

export default HeaderActions;
