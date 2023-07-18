import styled from 'styled-components';
import { respondTo } from '../../../styles/mixins/responsive';

const ModalCardWrapper = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  cursor: default;
  position: absolute;
  width: 20rem;
  height: 70vh;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  outline: none;
  display: flex;
  flex-direction: column;
  transition-property: background, color;
  transition: all 300ms ease;

  ${respondTo.xs`
  width: 30rem;
  height: 70vh; 
  `}
  ${respondTo.sm`
  width: 40rem;
  height: 70vh; 
  top: 3rem;     
  `}
  ${respondTo.md`
  width: 40rem;
  height: 70vh;
  `}
`;

export default ModalCardWrapper;
