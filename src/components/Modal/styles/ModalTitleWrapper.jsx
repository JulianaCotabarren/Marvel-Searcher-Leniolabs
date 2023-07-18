import styled from 'styled-components';
import { respondTo } from '../../../styles/mixins/responsive';

const ModalTitleWrapper = styled.div`
  width: 100%;
  position: relative;
  font-weight: 500;
  font-size: 1.4rem;
  padding-right: 25px;
  font-family: Roboto, Helvetica, sans-serif;

  ${respondTo.xs`
  font-size: 1.6rem;
  `}
  ${respondTo.sm`
  font-size: 1.8rem;
  `}
  ${respondTo.md`
  font-size: 2rem;
  `}
`;

export default ModalTitleWrapper;
