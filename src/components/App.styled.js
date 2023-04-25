import styled from '@emotion/styled';

export const Section = styled.main`
  font-family: 'Montserrat';
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 40;
  color: #010101;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px 20px 20px;
`;

export const AppHeader = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.22;
  text-align: center;
  width: 50%;
  height: 70px;
  border-radius: 10px;
  margin: 0 auto;
  padding: 0;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  z-index: 150;
`;
