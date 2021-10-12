import styled from "styled-components";

export const StyledTokenWrapper = styled.div`
  width: 7.2rem;
  height: 7.2rem;
  background-color: transparent;
  border-radius: 50%;
  perspective: 1000px;
`;

export const StyledInner = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  transition: transform 1s ease;
  transform-style: preserve-3d;
`;

export const StyledFront = styled.div`
  background-color: #304859;
  border-radius: 50%;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

export const StyledBack = styled.div`
  font-size: 4.4rem;
  border-radius: 50%;
  line-height: 1.2em;
  color: #fcfcfc;
  background-color: #bcced9;
  transform: rotateY(180deg);
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;
