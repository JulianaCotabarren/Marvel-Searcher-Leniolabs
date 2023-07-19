import styled from 'styled-components';

const HeaderInput = styled.input`
  width: 100%;
  height: 20px;
  outline: 0.5px solid ${({ theme }) => theme.text};
  padding: 5px;
  padding-left: ${({ active }) => (active ? '0' : '25px')};
  border: none;
  transition-property: background, color, padding-left;
  transition: all 300ms ease;
  background: ${({ theme }) => theme.input};
  color: ${({ theme }) => theme.text};

  &::placeholder {
    color: ${({ theme }) => theme.text};
  }
`;

export default HeaderInput;
