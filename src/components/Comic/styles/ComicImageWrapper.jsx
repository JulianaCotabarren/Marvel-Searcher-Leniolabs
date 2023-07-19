import styled from 'styled-components';
import { respondTo } from '../../../styles/mixins/responsive';

const ComicImageWrapper = styled.img`
  flex: 0 0 90px;
  height: 7rem;
  width: 2rem;
  border-radius: 5px;

  ${respondTo.md`
    height: 7rem;
    width: 1.8rem;
  `}
`;

export default ComicImageWrapper;
