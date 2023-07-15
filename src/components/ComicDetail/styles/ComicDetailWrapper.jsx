import styled from 'styled-components';
import { respondTo } from '../../../styles/mixins/responsive';

const ComicDetailWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background: #f8f9fA;
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;

    ${respondTo.sm`
        flex-wrap: no-wrap;
    `}
`;

export default ComicDetailWrapper;