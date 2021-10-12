import Button from "./Button";
import {
  StyledMain,
  StyledHeader,
  StyledGameGrid,
  StyledScoreContainer,
  StyledImg,
  StyledButtonWrapper,
} from "../styles/Game.styled";
import Logo from "../assets/logo.svg";
import Score from "./Score";
import Token from "./Token";

const Game = () => {
  return (
    <StyledMain>
      <StyledHeader>
        <StyledImg src={Logo} alt="logo" />
        <StyledButtonWrapper>
          <Button primary={true} name="Menu" />
        </StyledButtonWrapper>
      </StyledHeader>
      <StyledGameGrid>
          <Token />
          <Token />
          <Token />
          <Token />
          <Token />
          <Token />
          <Token />
          <Token />
          <Token />
          <Token />
          <Token />
          <Token />
          <Token />
          <Token />
          <Token />
          <Token />
      </StyledGameGrid>
      <StyledScoreContainer>
          <Score />
          <Score />
          <Score />
          <Score />
      </StyledScoreContainer>
    </StyledMain>
  );
};

export default Game;
