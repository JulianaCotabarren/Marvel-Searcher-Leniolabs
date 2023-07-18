import styled from 'styled-components';

const CardImageWrapper = styled.img`
  position: absolute;
  max-height: 100%;
  width: 100%;
  height: 380px;
  border-radius: 5px;
  &:hover {
    filter: contrast(0.8);
  }
`;

export default CardImageWrapper;
