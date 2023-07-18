import styled from 'styled-components';
import { respondTo } from '../../../styles/mixins/responsive';

const ComicDetailTitleWrapper = styled.div`
  width: 100%;
  position: relative;
  font-weight: 500;
  font-size: 1.2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-right: 25px;

  ${respondTo.sm`
        font-size: 1.7rem;
        margin-bottom: 2rem;
    `}
  ${respondTo.md`
        font-size: 2rem;
        margin-bottom: 3rem;
    `}
`;

export default ComicDetailTitleWrapper;
