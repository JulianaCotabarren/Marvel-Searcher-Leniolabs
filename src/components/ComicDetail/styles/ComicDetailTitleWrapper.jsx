import styled from 'styled-components';
import { respondTo } from '../../../styles/mixins/responsive';

const ComicDetailTitleWrapper = styled.div`
    width: 100%;
    position: relative;
    font-weight: 600;
    font-size: 1.3rem;
    margin-top: 1rem;
    margin-bottom: 3rem;
    padding-right: 25px;

    ${respondTo.sm`
        font-size: 1.7rem;
    `}
    ${respondTo.md`
        font-size: 2rem;
    `}
`;

export default ComicDetailTitleWrapper;