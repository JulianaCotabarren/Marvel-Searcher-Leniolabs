import styled from 'styled-components';
import { respondTo } from '../../../styles/mixins/responsive';

const ComicTitleWrapper = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 5px;
  position: relative;
  padding-right: 30px;
  color: ${({ theme }) => theme.text};

  ${respondTo.xs`
  font-size: .95rem;
  `}
  ${respondTo.sm`
  font-size: 1rem;
  `}
  ${respondTo.md`
  font-size: 1rem;
  `}
`;

export default ComicTitleWrapper;
