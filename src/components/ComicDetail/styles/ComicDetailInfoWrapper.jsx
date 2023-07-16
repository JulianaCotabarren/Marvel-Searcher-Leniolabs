import styled from 'styled-components';
import { respondTo } from '../../../styles/mixins/responsive';

const ComicDetailInfo = styled.div`
  flex: 0 0 100%;
  left: 45vw;
  padding: 0 30px;
  position: absolute;
  max-width: 50vw;
  margin-top: 1rem;

  ${respondTo.sm`
        flex: 0 0 50%;
    `}
`;

export default ComicDetailInfo;
