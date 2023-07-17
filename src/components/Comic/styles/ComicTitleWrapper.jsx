import styled from 'styled-components';

const ComicTitleWrapper = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 5px;
  position: relative;
  padding-right: 30px;
  color: ${({ theme }) => theme.text};
`;

export default ComicTitleWrapper;
