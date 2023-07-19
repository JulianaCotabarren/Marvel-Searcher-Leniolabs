import styled from 'styled-components';
import { respondTo } from '../../../styles/mixins/responsive';

const ComicDetailDescriptionWrapper = styled.div`
  width: 100%;
  position: relative;
  font-weight: 300;
  font-size: 0.8rem;
  margin-bottom: 1rem;

  ${respondTo.xs`
    font-size: .9rem;
  `}
  ${respondTo.sm`
    font-size: 0.9rem;
  `}
  ${respondTo.md`
    font-size: 1rem;
  `}
`;

export default ComicDetailDescriptionWrapper;
