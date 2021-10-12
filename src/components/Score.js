import {
  StyledWrapper,
  StyledTitle,
  StyledNumber,
} from "../styles/Score.styled";
import { useState } from "react";
import Timer from "./Timer";

const Score = ({ title, players }) => {
  const [count, setCount] = useState(0);
  return (
    <StyledWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledNumber>{players === 1 ? <Timer /> : count}</StyledNumber>
    </StyledWrapper>
  );
};

export default Score;
