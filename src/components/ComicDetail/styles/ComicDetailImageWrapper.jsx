import styled from 'styled-components';
import { respondTo } from '../../../styles/mixins/responsive';

const ComicDetailImageWrapper = styled.img`
    flex: 0 0 100%;
    padding: 0 30px;
    max-width: 40vw;

    ${respondTo.sm`
        flex: 0 0 50%;   
    `}
`;

export default ComicDetailImageWrapper;