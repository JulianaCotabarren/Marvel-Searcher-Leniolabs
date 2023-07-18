import styled from 'styled-components';
import { respondTo } from '../../../styles/mixins/responsive';

const ComicDescriptionWrapper = styled.div`
  font-size: 0.7rem;
  font-weight: 300;
  height: 4rem;
  overflow-y: scroll;
  color: ${({ theme }) => theme.text};

  ::-webkit-scrollbar {
    display: none;
  }

  ${respondTo.xs`
  font-size: .75rem;
  `}
  ${respondTo.sm`
  font-size: .8rem;
  `}
  ${respondTo.md`
  font-size: .85rem;
  `}
`;

export default ComicDescriptionWrapper;
