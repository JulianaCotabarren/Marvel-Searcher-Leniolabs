import styled from 'styled-components';
import { respondTo } from '../../../styles/mixins/responsive';

const ComicDetailInfoWrapper = styled.div`
  flex: 0 0 100%;
  padding: 0 30px;
  position: relative;
  max-width: 90vw;
  margin-top: 1rem;

  ${respondTo.sm`
        flex: 0 0 50%;
        position: absolute;
        left: 45vw;
        max-width: 50vw;
    `}
  ${respondTo.xs`
    flex: 0 0 100%;
    position: absolute;
    left: 45vw;
    max-width: 50vw;
`}
`;

export default ComicDetailInfoWrapper;
