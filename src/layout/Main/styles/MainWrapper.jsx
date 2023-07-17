import styled from 'styled-components';
import { respondTo } from '../../../styles/mixins/responsive';

const MainWrapper = styled.div`
  min-height: 100vh;
  padding: 5rem 0 2rem 0;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  margin: -0.5rem;

  ${respondTo.sm`
    padding: 5rem 0 2rem 0;
  `}
`;

export default MainWrapper;
