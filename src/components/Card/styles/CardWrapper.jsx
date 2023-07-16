import styled from 'styled-components';
import { respondTo } from '../../../styles/mixins/responsive';

const CardWrapper = styled.div`
  cursor: pointer;
  flex-basis: 85%;
  min-height: 360px;
  background: gray;
  border-radius: 0.3rem;
  margin: 5px;
  margin-bottom: 15px;
  position: relative;
  overflow: hidden;

  ${respondTo.xs`
        flex-basis: 35%;
    `}
  ${respondTo.sm`
        flex-basis: 23%;
    `}
`;

export default CardWrapper;
