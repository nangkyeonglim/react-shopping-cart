import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1600px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1750px) {
    padding: 0 80px;
  }
  @media screen and (max-width: 576px) {
    padding: 0 40px;
  }
`;
