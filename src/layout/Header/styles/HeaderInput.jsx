import styled from 'styled-components';

const HeaderInput = styled.input`
  width: 100%;
  height: 20px;
  outline: 0.5px solid rgba(0, 0, 0, 0.1);
  padding: 5px;
  padding-left: 25px;
  border: none;
  transition-property: background, color, padding-left;
  transition: all 300ms ease;
`;

export default HeaderInput;
