import styled from 'styled-components';

const StarWrapper = styled.div`
  width: 3rem;
  margin: 0 auto 0.4rem auto;
  color: ${({ theme }) => theme.text};
  font-weight: 200;
  cursor: pointer;
  font-size: 2rem;
  transition: color 300ms ease;
`;

export default StarWrapper;
