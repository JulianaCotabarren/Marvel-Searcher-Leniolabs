import styled from 'styled-components';

const ComicWrapper = styled.div`
  width: 100%;
  max-height: 95px;
  display: flex;
  margin-bottom: 10px;
  background: ${({ theme }) => theme.body};
  position: relative;
`;

export default ComicWrapper;
