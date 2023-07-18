import styled from 'styled-components';
import { respondTo } from '../../../styles/mixins/responsive';

const ComicDetailSubTitleWrapper = styled.p`
  width: 100%;
  position: relative;
  font-weight: 500;
  font-size: 1rem;
  padding-right: 25px;
  text-transform: capitalize;
  margin-bottom: 1rem;
  margin-top: 0;

  ${respondTo.sm`
  font-size: 1.3rem;
  margin-bottom: 2rem;
`}
  ${respondTo.md`
  font-size: 1.5rem;
  margin-bottom: 3rem;
`}
`;

export default ComicDetailSubTitleWrapper;
