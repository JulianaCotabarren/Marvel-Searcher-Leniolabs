import styled from 'styled-components';
import { respondTo } from '../../../styles/mixins/responsive';

const ComicDetailDescription = styled.div`
    width: 100%;
    position: relative;
    font-weight: 300;
    font-size: .9rem;
    margin-bottom: 1rem;

    ${respondTo.sm`
        font-size: 1rem;
    `}
    ${respondTo.md`
        font-size: 1.1rem;
    `}
`;

export default ComicDetailDescription;