import styled from 'styled-components';

const ComicInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  color: ${({ theme }) => theme.text};
  font-family: Roboto, Helvetica, sans-serif;
`;

export default ComicInfoWrapper;
