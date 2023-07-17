import styled from 'styled-components';

const ComicDescriptionWrapper = styled.div`
  font-size: 0.9rem;
  font-weight: 300;
  max-height: 55px;
  overflow-y: scroll;
  color: ${({ theme }) => theme.text};

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default ComicDescriptionWrapper;
