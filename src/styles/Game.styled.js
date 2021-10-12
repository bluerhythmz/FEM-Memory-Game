import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100vw;
  max-width: 87%;
  margin: 0 auto;
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.9rem;
`;
export const StyledImg = styled.img`
  max-width: 28%;
`;

export const StyledButtonWrapper = styled.div`
  width: 23%;
`;

export const StyledGameGrid = styled.section`
  margin-top: 8rem;
  margin-bottom: 10rem;
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;

export const StyledScoreContainer = styled.section`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(20px, 1fr) );
    gap: 2.4rem;
`;
